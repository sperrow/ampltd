# Alma Frontend Engineer Take Home Exercise

## General

-   I built this with Next.js and TypeScript (I used the nextjs dashboard template for most of the boilerplate code).

## CSS

-   I used Tailwind for efficiency and consistency. The styling is not a 1:1 match with the mockups, I could've gotten it closer with custom css but prioritized the other features for the sake of time.

## DB

-   I used Postgres to create a table for Leads and for Admin Users.

## Authentication

-   I used NextAuth with credentials stored in Postgres, using middleware to protect the /dashboard path.

## Leads Dashboard

-   I fetch the Leads data using a server component. For the table component I used ag-grid. For the button to change a lead's status I just added a button column. I considered using checkboxes, editable cells, or dropdowns but for simplicity this seemed the most straightforward.
-   I didn't implement an api for the status change button so for now it only updates in the client.

## New Lead Form

-   I used zod for validating fields. The file upload element only accepts pdfs and word documents. I only implemented a mock api for creating the new lead.
