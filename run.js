"use strict"

const MesinHitung = require('./MesinHitung.js');
var mh = new MesinHitung();
var PI = Math.PI

mh.add(10).substract(5).result(); //1  + 10 - 5 = 6
mh.add(3).multiply(4).divide(6).result(); //(6 + 3) * 4) / 6 = 6
mh.num = 7; // set jari-jari adalah 7

console.log (`nilai sekarang adalah: ${mh.num}`);

mh.multiply(2).multiply(PI).result();//keliling lingkaran dengan jari-jari 7 => 2 x Pi x r = 44

mh.num = 7 //set jari-jari 7
mh.square().multiply(PI).result(); //luas lingkaran dengan jari-jari 7 => Pi x r pangkat 2 = 154

mh.num = 4;
mh.exponent(3).result(); // 4 pangkat 3 = 64
mh. squareRoot().result(); // akar 2 dari 64 = 8
