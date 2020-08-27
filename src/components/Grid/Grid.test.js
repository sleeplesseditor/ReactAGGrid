import React from 'react';
import { shallow } from 'enzyme';
import { AgGridReact } from 'ag-grid-react';
import Grid from './Grid';
import { columnDefs, defaultColDef } from './Config';

const mockData = {
    baseId: "polkadot",
    baseSymbol: "DOT",
    exchangeId: "bibox",
    percentExchangeVolume: "0.6048193724610198",
    priceQuote: "6.2194000000000000",
    priceUsd: "6.2260773569894598",
    quoteId: "tether",
    quoteSymbol: "USDT",
    rank: "25",
    tradesCount24Hr: "9949",
    updated: 1598541347180,
    volumeUsd24Hr: "4428807.6438452744746810"
}

const wrapper = shallow(
    <Grid columnDefs={columnDefs} defaultColDef={defaultColDef} rowData={mockData} />
);

const agGridReact = wrapper.find(AgGridReact)

agGridReact.simulate('gridReady')

describe('Grid', () => {
    it('renders an instance of the grid', () => {
        expect(agGridReact).toHaveLength(1);
    });

    // it('renders a row for object in the data array provided to the grid', () => {
    //     const dataRows = agGridReact.dive().find('.ag-row')
    //     console.log('ROW', dataRows)
    // });
})