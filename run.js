"use strict";
const MesinHitung = require("./MesinHitung.js")
let mh = new MesinHitung();
let Pi = mh.Pi

mh.add(10).subtract(5).result(); //1+10-5=6
mh.add(3).multiply(4).divide(6).result(); //current result is 6 then the mhutate is : 6+3*4/6=6
mh.x=7;//set jari jari 7
console.log('nilai sekarang:' +mh.x);
mh.multiply(2).multiply(Pi).result(); // keliling lingkaran dengan jari jari 7 => 2xPixr=44
mh.x=7; //set jari jari 7
mh.square().multiply(Pi).result(); //luas lingkaran dengan jari jari 7  =>ixr pangkat 2=154
mh.x=4;
mh.exponent(3).result();//4 pangkat 3 =64
mh.squareRoot().result(); // akar pangkat 2 dari 64 =8
