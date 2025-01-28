import { sql } from '@vercel/postgres';
import { Lead } from './definitions';

export async function fetchLeads() {
    try {
        // Artificially delay a response for demo purposes.
        // Don't do this in production :)

        // console.log('Fetching lead data...');
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const data = await sql<Lead>`SELECT * FROM leads`;

        // console.log('Data fetch completed after 3 seconds.');

        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch lead data.');
    }
}
