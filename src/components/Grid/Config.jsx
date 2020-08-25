import { acronymFormatter, currencyFormatter, numberForDisplay, rankNumberFormatter, timeStampFormatter } from './formatters';

function compareValues(params) {
    if (params.oldValue > params.newValue){ 
    console.log(params.newValue);
    return {color: 'green'};
    }

    if (params.oldValue < params.newValue){ 
        console.log(params.newValue);
        return {color: 'red'};
    }
}

const baseSymbol = {
    headerName: 'Base Symbol',
    field: 'baseSymbol',
    cellRenderer: 'iconRenderer',
    sortable: true,
    filter: true
}

const quoteSymbol = {
    headerName: 'Quote Symbol',
    field: 'quoteSymbol',
    cellRenderer: 'iconRenderer',
    sortable: true,
    filter: true
}

const exchangeId = {
    headerName: 'Exchange ID',
    field: 'exchangeId',
    valueFormatter: acronymFormatter,
    sortable: true,
    filter: true
}

const priceQuote = {
    headerName: 'Price Quote',
    field: 'priceQuote',
    valueFormatter: currencyFormatter,
    sortable: true,
    filter: 'agNumberColumnFilter',
    newValueHandler: compareValues
}

const priceUSD = {
    headerName: 'Price (USD)',
    field: 'priceUsd',
    valueFormatter: currencyFormatter,
    sortable: true,
    filter: 'agNumberColumnFilter',
    newValueHandler: compareValues
}

const rank = {
    headerName: 'Rank',
    field: 'rank',
    sortable: true,
    valueFormatter: rankNumberFormatter,
    filter: 'agNumberColumnFilter',
    type: 'numberColumn',
}

const tradesCount24Hr = {
    headerName: 'Trades Count (24hr)',
    field: 'tradesCount24Hr',
    valueFormatter: numberForDisplay,
    sortable: true,
    filter: 'agNumberColumnFilter',
    newValueHandler: compareValues
}

const updated = {
    headerName: 'Updated',
    field: 'updated',
    valueFormatter: timeStampFormatter,
    sortable: true,
    filter: 'agDateColumnFilter',
    sort: 'desc',
}

export const columnDefs = [
    exchangeId, rank, baseSymbol, quoteSymbol, priceQuote, priceUSD, tradesCount24Hr, updated
]

export const defaultColDef = { resizable: true, enableCellChangeFlash: true };