import numeral from 'numeral';


export const FormatNumber = (number) => {
return numeral(number).format('0,0.[0000]');
}