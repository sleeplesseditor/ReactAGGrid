import { 
    acronymFormatter, 
    currencyFormatter, 
    numberForDisplay, 
    rankNumberFormatter
} from './formatters';
import moment from 'moment';

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

describe('Formatters', () => {
    it('should convert exchangeId to upper case', () => {
        const updatedValue = acronymFormatter(mockData.exchangeId)
        expect(updatedValue).toEqual('BIBOX')
    });

    it('should format the timestamp to a human-readable format', () => {
        // Same setup as timeStampFormatter but static to avoid updating issue
        const updatedTimeValue = moment(mockData.updated).format('DD/MM/YYYY HH:mm:ss')
        expect(updatedTimeValue).toEqual('27/08/2020 16:15:47');
    });

    it('should format the currency to the US Dollar fomat', () => {
        const updatedCurrencyValue = currencyFormatter(mockData.priceUsd)
        expect(updatedCurrencyValue).toEqual('$6.226')
    });

    it('should convert the number for displaying the trades count value', () => {
        const updatedTradesCountValue = numberForDisplay(mockData.tradesCount24Hr)
        expect(updatedTradesCountValue).toEqual('9,949')
    });

    it('should convert the rank number string to a number value', () => {
        const updatedRankNumber = rankNumberFormatter(mockData.rank)
        expect(updatedRankNumber).toEqual(25);
    })
})