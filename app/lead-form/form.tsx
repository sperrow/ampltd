'use client';

// import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import { CheckIcon, ClockIcon, CurrencyDollarIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createLead, State } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function Form() {
    const initialState: State = {
        data: { firstName: '', lastName: '', email: '', country: '', linkedin: '', comment: '' },
        message: null,
        errors: {},
    };
    const [state, formAction] = useActionState(createLead, initialState);
    console.log('help');

    return (
        <form action={formAction} className="w-full">
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* First Name */}
                <div className="mb-4">
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium hidden">
                        First Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="first-name-error"
                                defaultValue={state.data?.firstName || undefined}
                                required
                            />
                        </div>
                        <div id="first-name-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.firstName &&
                                state.errors.firstName.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                {/* Last Name */}
                <div className="mb-4">
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium hidden">
                        Last Name
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="last-name-error"
                                defaultValue={state.data?.lastName || undefined}
                                required
                            />
                        </div>
                        <div id="last-name-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.lastName &&
                                state.errors.lastName.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium hidden">
                        Email
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="email-error"
                                defaultValue={state.data?.email || undefined}
                                required
                            />
                        </div>
                        <div id="email-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.email &&
                                state.errors.email.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                {/* Country */}
                <div className="mb-4">
                    <label htmlFor="country" className="mb-2 block text-sm font-medium hidden">
                        Country
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="country"
                                name="country"
                                type="text"
                                placeholder="Country of Citizenship"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="country-error"
                                defaultValue={state.data?.country || undefined}
                                required
                            />
                        </div>
                        <div id="country-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.country &&
                                state.errors.country.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                {/* LinkedIn */}
                <div className="mb-4">
                    <label htmlFor="linkedin" className="mb-2 block text-sm font-medium hidden">
                        LinkedIn
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="linkedin"
                                name="linkedin"
                                type="url"
                                placeholder="LinkedIn / Personal Website URL"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="linkedin-error"
                                defaultValue={state.data?.linkedin || undefined}
                                required
                            />
                        </div>
                        <div id="linkedin-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.linkedin &&
                                state.errors.linkedin.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                {/* Visa Type */}
                <div className="mb-4">
                    <fieldset aria-describedby="visa-error">
                        <legend className="mb-2 block text-sm font-medium">Visa categories of interest?</legend>
                        <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
                            <div className="flex gap-4">
                                <div className="flex items-center">
                                    <input
                                        id="O1"
                                        name="visa"
                                        type="checkbox"
                                        value="O1"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="O1"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        O-1
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="EB1A"
                                        name="visa"
                                        type="checkbox"
                                        value="EB1A"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="EB1A"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        EB-1A
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="EB2"
                                        name="visa"
                                        type="checkbox"
                                        value="EB2"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="EB2"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        EB-2 NIW
                                    </label>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        id="unknown"
                                        name="visa"
                                        type="checkbox"
                                        value="unknown"
                                        className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                                    />
                                    <label
                                        htmlFor="unknown"
                                        className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                                    >
                                        I don't know
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
                {/* Resume */}
                <div className="mb-4">
                    <label htmlFor="resume" className="mb-2 block text-sm font-medium">
                        Resume / CV
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <input
                                id="resume"
                                name="resume"
                                type="file"
                                placeholder="Resume / CV"
                                className="peer block w-full py-2 text-sm outline-2 placeholder:text-gray-500"
                                aria-describedby="resume-error"
                            />
                        </div>
                        <div id="resume-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.resume &&
                                state.errors.resume.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
                {/* Comment */}
                <div className="mb-4">
                    <label htmlFor="comment" className="mb-2 block text-sm font-medium">
                        How can we help you?
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <div className="relative">
                            <textarea
                                name="comment"
                                id="comment"
                                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
                                defaultValue={state.data?.comment || undefined}
                                required
                            ></textarea>
                        </div>
                        <div id="comment-error" aria-live="polite" aria-atomic="true">
                            {state.errors?.comment &&
                                state.errors.comment.map((error: string) => (
                                    <p className="mt-2 text-sm text-red-500" key={error}>
                                        {error}
                                    </p>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-center gap-4">
                <Link
                    href="/"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    );
}
