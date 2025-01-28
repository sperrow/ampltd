import { lusitana } from '@/app/ui/fonts';
import { fetchLeads } from '@/app/lib/data';
import LeadsTable from './leadsTable';

export default async function Page() {
    const leads = await fetchLeads();

    return (
        <main className="h-full">
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Leads</h1>
            <LeadsTable leads={leads} />
        </main>
    );
}
