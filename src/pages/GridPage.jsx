import React, { useState, useEffect } from 'react';
import fetch from "unfetch";
import useSWR from "swr";
import Grid from '../components/Grid/Grid';
import { columnDefs, defaultColDef } from '../components/Grid/Config';
import { IconRenderer } from '../components/Grid/cellRenderers';
import './GridPage.scss';

const API_URL = "https://api.coincap.io/v2/markets";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const localFrameworkComps = {
    iconRenderer: IconRenderer
}

const GridPage = () => {
    const { data: result, error } = useSWR(API_URL, fetcher, { refreshInterval: 10000 })
    const coins = result && !error ? result.data : []
    const [coinData, setCoinData] = useState([])

    useEffect(() => {
        setCoinData(coins);
    }, [coins])

    return (
        <div className="grid-page">
            <Grid 
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                frameworkComponents={localFrameworkComps}
                rowData={coinData}
            />
        </div>
    )
}

export default GridPage