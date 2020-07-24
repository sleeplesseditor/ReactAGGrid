import { acronymFormatter, currencyFormatter, timeStampFormatter } from './formatters';

const baseSymbol = {
    headerName: 'Base Symbol',
    field: 'baseSymbol',
    sortable: true,
    filter: true
}

const quoteSymbol = {
    headerName: 'Quote Symbol',
    field: 'quoteSymbol',
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
    filter: true
}

const priceUSD = {
    headerName: 'Price (USD)',
    field: 'priceUsd',
    valueFormatter: currencyFormatter,
    sortable: true,
    filter: true
}

const rank = {
    headerName: 'Rank',
    field: 'rank',
    sortable: true,
    filter: true
}

const tradesCount24Hr = {
    headerName: 'Trades Count (24hr)',
    field: 'tradesCount24Hr',
    sortable: true,
    filter: true
}

const updated = {
    headerName: 'Updated',
    field: 'updated',
    valueFormatter: timeStampFormatter,
    sortable: true,
    filter: true
}

export const columnDefs = [
    exchangeId, rank, baseSymbol, quoteSymbol, priceQuote, priceUSD, tradesCount24Hr, updated
]

export const defaultColDef = { resizable: true };