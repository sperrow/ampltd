# Alma Frontend Engineer Take Home Exercise

-   I built this with Next.js and TypeScript (I used the nextjs dashboard template for most of the boilerplate code). For styling I used Tailwind for efficiency and consistency.

-   I used Postgres to create a table for Leads and for Admin Users.

-   For authentication I used NextAuth with credentials stored in Postgres, using middleware to protect the /dashboard path.

-   For the dashboard, I fetch the Leads data using a server component. For the table component I used ag-grid. For the button to change a lead's status I just added a button column. I considered using checkboxes, editable cells, or dropdowns but for simplicity this seemed the most straightforward.

-   For the new lead form, I used zod for validating fields. The file upload element only accepts pdfs and word documents.
