import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Grid.scss';

const Grid = ({ columnDefs, defaultColDef, frameworkComponents, rowClick, rowData }) => {
    const onFirstDataRendered = params => {
        params.api.sizeColumnsToFit();
    }

    return (
        <div className="grid-container">
            <div className="ag-theme-balham"
                style={{ height: '85vh', width: '95vw' }}>
                <AgGridReact
                    defaultColDef={defaultColDef}
                    id="crypto-coin"
                    frameworkComponents={frameworkComponents}
                    filter={true}
                    rowSelection="multiple"
                    resizable={true}
                    columnDefs={columnDefs}
                    rowData={rowData}
                    sorting={true}
                    onFirstDataRendered={onFirstDataRendered}
                    animateRows={true}
                    onRowClicked={rowClick}
                />
            </div>
        </div>
    )
}

export default Grid;