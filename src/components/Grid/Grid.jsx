import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Grid.scss';

const Grid = ({ columnDefs, defaultColDef, frameworkComponents, rowData }) => {
    const onFirstDataRendered = params => {
        params.api.sizeColumnsToFit();
    }

    return (
        <div className="grid-container">
            <div className="ag-theme-balham"
                style={{ height: '100vh', width: '1200px' }}>
                <AgGridReact
                    defaultColDef={defaultColDef}
                    frameworkComponents={frameworkComponents}
                    filter={true}
                    rowSelection="multiple"
                    resizable={true}
                    columnDefs={columnDefs}
                    rowData={rowData}
                    sorting={true}
                    onFirstDataRendered={onFirstDataRendered}
                    animateRows={true}
                />
            </div>
        </div>
    )
}

export default Grid;