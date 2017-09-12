const mesinHitung = require('./mesinHitung.js')
let mh = new mesinHitung();
let Pi = mh.PI;
mh.add(10).substract(5).result();//1 + 10 - 5 = 6
mh.add(3).multiply(4).divide(6).result();//current result is 2 then the mutate is : 6 + 3 x 4 / 6 =6
mh.i = 7 //set jari" 7
console.log(`nilai sekarang : ${mh.i}`);
mh.multiply(2).multiply(Pi).result();//keliling lingkaran dengan jari2 7 => 2 x pi x r = 44
mh.i = 7 //set jari2 7
mh.square().multiply(Pi).result(); // luas lingkaran dengan jari2 7 => Pi x r pangkat 2 = 154
mh.i = 4;
mh.exponent(3).result(); // 4 pangkat 3 = 64
mh.squareRoot().result();// akar pangkat 2 dari 64 = 8
