import {mesinHitung} from './mesinHitung.js'

let hitung = new mesinHitung();
let Pi = hitung.PI;

hitung.add(10).substract(5).hasil();
hitung.add(3).multiply(4).divide(6).hasil();
hitung.i = 7;
console.log(`nilai i sekarang adalah :${hitung.i}`)
hitung.multiply(2).multiply(Pi).hasil();
hitung.i = 7;
console.log(`nilai i sekarang adalah :${hitung.i}`)
hitung.kuadrat().multiply(Pi).hasil();
hitung.i = 4;
console.log(`nilai i sekarang adalah :${hitung.i}`)
hitung.pangkat(3).hasil();
console.log(`nilai i sekarang adalah :${hitung.i}`)
hitung.akar().hasil();
