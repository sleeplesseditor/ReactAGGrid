import moment from 'moment';

export function rankNumberFormatter(params) {
    const newValue = params.value ? parseInt(params.value) : parseInt(params);
    return newValue;
}

export function currencyFormatter(value) {
    return '\x24' + numberFormatter(value);
}
  
function numberFormatter(number) {
    const fixedNumber = parseFloat(number).toFixed(4)
    const updatedNumber = Number(fixedNumber).toLocaleString('en');
    return updatedNumber;
}

export function numberForDisplay(value) {
    const newValue = new Intl.NumberFormat().format(value)
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