"use strict";

module.exports = class MesinHitung {
  constructor() {
    this.hasilNum = 1;
    this.Pi = Math.PI; // kalo PI i nya kecil dia bakal jadi NaN karna isinya itu ada desimal
  }

  X(num) {
    this.hasilNum = num;
    return this;
  }

  tambah(num) {
    this.hasilNum += num;
    return this;
  }

  kurang(num) {
    this.hasilNum -= num;
    return this;
  }

  kali(num) {
    this.hasilNum *= num;
    return this;
  }

  bagi(num) {
    this.hasilNum /= num;
    return this;
  }

  square() {
    this.hasilNum = Math.pow(this.hasilNum, 2);
    return this;
  }

  exponent(num) {
    this.hasilNum = Math.pow(this.hasilNum, num);
    return this;
  }

  squareRoot() {
    this.hasilNum = Math.sqrt(this.hasilNum);
    return this;
  }

  hasil() {
    console.log(this.hasilNum);
    this.hasilNum = 1;
    return this;
  }
};
