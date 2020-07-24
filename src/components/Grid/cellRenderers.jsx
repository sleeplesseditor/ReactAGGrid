import React from 'react';
import { IconNames } from './iconNames';

const getIcon = (icon) => {
  switch (icon) {
    case IconNames.ALGO:
      return 'cf cf-algo';
    case IconNames.ATOM:
      return 'cf cf-atom';
    case IconNames.BAT:
      return 'cf cf-bat';
    case IconNames.BCH:
      return 'cf cf-bch';
    case IconNames.BIX:
      return 'cf cf-bix';
    case IconNames.BTC:
      return 'cf cf-btc';
    case IconNames.CPC:
      return 'cf cf-cpc2';
    case IconNames.DASH:
      return 'cf cf-dash';
    case IconNames.DOGE:
      return 'cf cf-doge';
    case IconNames.EOS:
      return 'cf cf-eos';
    case IconNames.ETC:
      return 'cf cf-etc';
    case IconNames.ETH:
      return 'cf cf-eth';
    case IconNames.GRIN:
      return 'cf cf-grin';
    case IconNames.HPB:
      return 'cf cf-hpb';
    case IconNames.HT:
      return 'cf cf-ht';
    case IconNames.HYN:
      return 'cf cf-hyn';
    case IconNames.INSTAR:
      return 'cf cf-instar';
    case IconNames.KEY:
      return 'cf cf-key2';
    case IconNames.LEND:
      return 'cf cf-lend';
    case IconNames.LINK:
      return 'cf cf-link';
    case IconNames.LOG:
      return 'cf cf-log';
    case IconNames.LTC:
      return 'cf cf-ltc';
    case IconNames.MKR:
      return 'cf cf-mkr';
    case IconNames.NEO:
      return 'cf cf-neo';
    case IconNames.OMG:
      return 'cf cf-omg';
    case IconNames.ONT:
      return 'cf cf-ont';
    case IconNames.QTUM:
      return 'cf cf-qtum';
    case IconNames.REP:
      return 'cf cf-rep';
    case IconNames.RDN:
      return 'cf cf-rdn';
    case IconNames.TNB:
      return 'cf cf-tnb';
    case IconNames.TRX:
      return 'cf cf-trx';
    case IconNames.UBTC:
      return 'cf cf-ubtc';
    case IconNames.USDT:
      return 'cf cf-usdt';
    case IconNames.XNK:
      return 'cf cf-xnk';
    case IconNames.XRP:
      return 'cf cf-xrp';
    default:
      break;
  }
};

const IconSelector = (icon) => {
  const iconClass = getIcon(icon);
  return (
    <span>
      <i className={`${iconClass}`}></i>
    </span>
  );
};

export const IconRenderer = ({ value }) => {
  if (!value) {
    return (
      <div />
    );
  }
  return (
    <div>
      {IconSelector(value)} {value}
    </div>
  );
}