import React from 'react';
import { 
    currencyFormatter, 
    numberForDisplay, 
    timeStampFormatter 
} from './displayFormatters';
import { modalIconRenderer } from '../Grid/cellRenderers';
import './Modal.scss';

const Backdrop = (props) => (
    props.show ? <div className='grid-backdrop' onClick={props.clicked}></div> : null
)

const modal = ({ data, modalClosed, show }) => {
    return (
        <>
            <Backdrop show={show} clicked={modalClosed} />
            {data && show ? (
                <div className='grid-modal'>
                    <div className="grid-modal-title">
                        {modalIconRenderer(data.baseSymbol)}<h2>{data.baseId.toUpperCase()}</h2>
                    </div>
                    <hr />
                    <div className='grid-modal-row'>
                        <div className='grid-modal-cell'>
                            <h4>Rank</h4>
                            <p>{data.rank}</p>
                        </div>
                        <div className='grid-modal-cell'>
                            <h4>Exchange ID</h4>
                            <p>{data.exchangeId.toUpperCase()}</p>
                        </div>
                        <div className='grid-modal-cell'>
                            <h4>Price Quote</h4>
                            <p>{currencyFormatter(data.priceQuote)}</p>
                        </div>
                        <div className='grid-modal-cell'>
                            <h4>Price USD</h4>
                            <p>{currencyFormatter(data.priceUsd)}</p>
                        </div>
                        <div className='grid-modal-cell'>
                            <h4>Trades Count (24 Hours)</h4>
                            <p>{numberForDisplay(data.tradesCount24Hr)}</p>
                        </div>
                        <div className='grid-modal-cell'>
                            <h4>USD Volume (24 Hours)</h4>
                            <p>{currencyFormatter(data.volumeUsd24Hr)}</p>
                        </div>
                        <div className='grid-modal-cell'>
                            <h4>Quote Symbol</h4>
                            <p className="grid-modal-cell-quote">
                                {modalIconRenderer(data.quoteSymbol)} {data.quoteSymbol === 'AUD' ? null : data.quoteSymbol.toUpperCase()}
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="grid-modal-btn-container">
                        <div className='grid-modal-row-update'>
                            Updated: {timeStampFormatter(data.updated)}
                        </div>
                        <button className="grid-modal-btn" onClick={modalClosed}>Close</button>
                    </div>
                </div>
            ): null }
        </>
    );
};


export default modal;