import numeral from 'numeral';
import './index.css'
const courseValue = numeral(1000).format('$0,0.00');
debugger; //eslint-disable-line no-debugger 

console.log(`Pay ${courseValue} for course`); //eslint-disable-line no-console 