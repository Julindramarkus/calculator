"use strict"
const MesinHitung = require("./mesin-hitung.js")

var mh = new MesinHitung();
var Pi = mh.PI;

mh.add(10).subtract(5).result();
mh.add(3).multiply(4).divide(6).result();
mh.y = 7;
console.log(`nilai sekarang:  ${mh.y}`)
//keliling lingkaran : 2 x Pi X r
mh.multiply(2).multiply(Pi).result();
mh.y = 7;
// luas lingkaran : Pi x r pangkat 2
mh.square().multiply(Pi).result();
mh.y = 4;
mh.exponent(3).result();
mh.squareRoot().result();
