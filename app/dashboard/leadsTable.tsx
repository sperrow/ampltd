'use client';

import { Lead } from '../lib/definitions';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, CellClickedEvent, ColDef, GetRowIdParams, ModuleRegistry } from 'ag-grid-community';
import { useCallback, useMemo, useState } from 'react';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

export default function LeadsTable({ leads }: { leads: Lead[] }) {
    const defaultColDef = useMemo(
        () => ({
            flex: 1,
        }),
        []
    );

    const getRowId = useCallback((params: GetRowIdParams<Lead>) => params.data.id, []);

    const [colDefs, setColDefs] = useState<ColDef<Lead>[]>([
        { field: 'name', headerName: 'Name' },
        { field: 'country', headerName: 'Country' },
        { field: 'date', headerName: 'Submitted' },
        {
            field: 'status',
            headerName: 'Status',
            valueFormatter: ({ value }) => (value === 'PENDING' ? 'Pending' : 'Reached Out'),
            cellClassRules: {
                'bg-yellow-100 text-yellow-500': ({ value }) => value === 'PENDING',
                'bg-blue-100 text-blue-500': ({ value }) => value === 'REACHED_OUT',
            },
        },
        {
            colId: 'changeStatus',
            headerName: 'Change Status',
            cellRenderer: () => {
                return (
                    <button type="button" className="border rounded-lg border-gray-300 bg-white py-1 px-2 text-sm">
                        Change
                    </button>
                );
            },
        },
    ]);
    const [rowData, setRowData] = useState<Lead[]>(leads);

    const onCellClicked = useCallback((event: CellClickedEvent) => {
        if (event.colDef.colId !== 'changeStatus') return;
        // TODO: make API call
        setRowData((prev) => {
            return prev.map((lead) => {
                if (lead.id === event.data.id) {
                    return {
                        ...lead,
                        status: lead.status === 'PENDING' ? 'REACHED_OUT' : 'PENDING',
                    };
                }
                return lead;
            });
        });
    }, []);

    return (
        <div
            // define a height because the Data Grid will fill the size of the parent container
            style={{ height: 500 }}
        >
            <AgGridReact<Lead>
                rowData={rowData}
                columnDefs={colDefs}
                defaultColDef={defaultColDef}
                getRowId={getRowId}
                onCellClicked={onCellClicked}
                pagination
                paginationPageSize={10}
            />
        </div>
    );
}
