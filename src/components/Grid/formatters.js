import moment from 'moment';

export function rankNumberFormatter(params) {
    const newValue = params.value ? parseInt(params.value) : parseInt(params);
    return newValue;
}

export function currencyFormatter(params) {
    const currencyValue = params.value ? '\x24' + numberFormatter(params.value) : '\x24' + numberFormatter(params);
    return currencyValue;
}
  
function numberFormatter(number) {
    const fixedNumber = parseFloat(number).toFixed(4)
    const updatedNumber = Number(fixedNumber).toLocaleString('en');
    return updatedNumber;
}

export function numberForDisplay(params) {
    const newValue = params.value ? new Intl.NumberFormat().format(params.value) : new Intl.NumberFormat().format(params)
    return newValue;
}

export function timeStampFormatter({value}) {
    var date =  moment(value).isValid() ? moment(value).format('DD/MM/YYYY HH:mm:ss') : '';
    return date;
};

export function acronymFormatter(string) {
    const acronym = string.value ? string.value.toUpperCase() : string.toUpperCase();
    return acronym;
}