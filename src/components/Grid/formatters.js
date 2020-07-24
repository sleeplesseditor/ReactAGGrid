import moment from 'moment';

export function currencyFormatter(params) {
    return '\x24' + numberFormatter(params.value);
}
  
export function numberFormatter(number) {
    return Math.floor(number)
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export function timeStampFormatter(value) {
    return moment(value).format('DD/MM/YYYY hh:mm:ss')
};

export function acronymFormatter(string) {
    const acronym = string.value.toUpperCase();
    return acronym;
}