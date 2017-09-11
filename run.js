"use strict";

let MesinHitung = require("./MesinHitung.js");

let mh = new MesinHitung();
let Pi = mh.Pi;

console.log(Pi);
mh.tambah(10).kurang(5).hasil(); // 1 + 10 - 5 = 6
mh.X(6).tambah(3).kali(4).bagi(6).hasil(); // current hasil is 6 then the hasil is: 6 + 3 * 4 / 6 = 6
mh.X(7); // set jari-jari 7
console.log(`nilai sekarang : ${mh.hasilNum}`);
mh.kali(2).kali(Pi).hasil(); // keliling lingkaran dengan jari jari 7 => 2 x Pi x r = 44
mh.X(7); // set jari-jari 7
mh.square().kali(Pi).hasil(); //luas lingkaran dengan jari jari 7 => Pi x r pangkat 2 = 154
mh.X(4);
mh.exponent(3).hasil(); // 4 pangkat 3 = 64
mh.X(64).squareRoot().hasil(); // akar pangkat 2 dari 64 = 8
