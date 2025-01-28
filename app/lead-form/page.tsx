import Image from 'next/image';
import Form from './form';

export default async function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6">
            <div className="flex h-20 shrink-0 items-end rounded-lg bg-lime-200 p-4 md:h-52">
                <Image src="/alma_logo.png" width={200} height={50} alt="Alma Logo" />
            </div>
            <div className="mt-4 flex grow flex-col gap-4">
                <h1 className="my-12 text-2xl font-bold text-center">Want to understand your visa options?</h1>
                <div className="container mx-auto px-8">
                    <Form />
                </div>
            </div>
        </main>
    );
}
