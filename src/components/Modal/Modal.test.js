import React from 'react';
import { mount } from 'enzyme';
import Modal from './Modal';

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
};

let wrapper;

beforeEach(() => {
    wrapper = mount(<Modal data={mockData} show={true} />)
})

afterEach(() => {
    wrapper.unmount();
});

describe('Modal', () => {
    it('displays the modal once a grid row has been clicked', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('hides the modal once the show value has been toggled to false', () => {
        const updatedWrapper = mount(<Modal data={null} show={false} />)
        expect(updatedWrapper).toEqual({});
    });

    it('renders a button for closing the modal', () => {
        expect(wrapper.find('.grid-modal-btn').length).toEqual(1);
    });

    it('renders cells for the data passed to the modal', () => {
        expect(wrapper.find('.grid-modal-cell').length).toEqual(7);
    })

    it('hides the modal once the close button has been clicked', () => {
        wrapper.find('.grid-modal-btn').simulate('click');
        expect(wrapper).toEqual({});
    });
})