'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

import { z } from 'zod';
import { redirect } from 'next/navigation';

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

const fileSizeLimit = 5 * 1024 * 1024; // 5MB

const DOCUMENT_SCHEMA = z
    .instanceof(File)
    .refine(
        (file) =>
            ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(
                file.type
            ),
        { message: 'Please upload a valid document. Only PDF and Word documents are allowed.' }
    )
    .refine((file) => file.size <= fileSizeLimit, {
        message: 'File size should not exceed 5MB.',
    });

const FormSchema = z.object({
    firstName: z.string({
        invalid_type_error: 'Please enter a first name.',
    }),
    lastName: z.string({
        invalid_type_error: 'Please enter a last name.',
    }),
    email: z.string({
        invalid_type_error: 'Please enter an email.',
    }),
    country: z.string({
        invalid_type_error: 'Please enter a country.',
    }),
    linkedin: z.string({
        invalid_type_error: 'Please enter a valid url.',
    }),
    resume: DOCUMENT_SCHEMA.optional(),
    comment: z.string(),
});

export type FormSchemaType = z.infer<typeof FormSchema>;
export type State = {
    data?: FormSchemaType;
    errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        country?: string[];
        linkedin?: string[];
        resume?: string[];
        comment?: string[];
    };
    message?: string | null;
};

export async function createLead(prevState: State, formData: FormData) {
    const validatedFields = FormSchema.safeParse({
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        country: formData.get('country'),
        linkedin: formData.get('linkedin'),
        resume: formData.get('resume'),
        comment: formData.get('comment'),
    });

    // If form validation fails, return errors early. Otherwise, continue.
    if (!validatedFields.success) {
        const data = Object.fromEntries(formData);
        return {
            data: data as FormSchemaType,
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Submit.',
        };
    }

    redirect('/lead-form/success');
}
