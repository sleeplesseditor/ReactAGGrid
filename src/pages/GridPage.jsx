import React, { useState, useEffect } from 'react';
import fetch from "unfetch";
import useSWR from "swr";
import Grid from '../components/Grid/Grid';
import { columnDefs, defaultColDef } from '../components/Grid/Config';
import './GridPage.scss';

const API_URL = "https://api.coincap.io/v2/markets";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const GridPage = () => {
    const { data: result, error } = useSWR(API_URL, fetcher);
    const coins = result && !error ? result.data : [];
    const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        setCoinData(coins);
    }, [coins])
    console.log('COIN', coinData)

    return (
        <div className="grid-page">
            <Grid 
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowData={coinData}
            />
        </div>
    )
}

export default GridPage;