import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './Grid.scss';

const Grid = ({ columnDefs, rowData }) => {
    return (
        <div className="grid-container">
            <div className="ag-theme-balham"
                style={{ height: '100vh', width: '1200px' }}>
                <AgGridReact 
                    filter={true}
                    rowSelection="multiple"
                    resizable={true}
                    columnDefs={columnDefs}
                    rowData={rowData}
                    enableSorting={true}
                />
            </div>
        </div>
    )
}

export default Grid;