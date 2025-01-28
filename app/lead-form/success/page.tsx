'use client';

import { Button } from '@/app/ui/button';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-lime-200 p-4 md:h-52">
                <Image src="/alma_logo.png" width={200} height={50} alt="Alma Logo" priority />
            </div>
            <div className="mt-4 flex grow flex-col justify-center items-center gap-4">
                <h1 className="my-12 text-2xl font-bold text-center">Thank You</h1>
                <Button onClick={() => redirect('/')} className="bg-black px-8">
                    Back to Home
                </Button>
            </div>
        </main>
    );
}
