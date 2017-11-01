"use strict"

module.exports = class MesinHitung{
  constructor () {
    this.number = 1;
    this.Pi = Math.PI;
  }
  initialNum(num) {
    this.number = num;
    return this;
  }
  adding(num) {
    this.number += num;
    return this;
  }
  substract(num) {
    this.number -= num;
    return this;
  }
  divide(num) {
    this.number /= num;
    return this;
  }
  multiply(num) {
    this.number *= num;
    return this;
  }
  square(num) {
    this.number = Math.pow(this.number, 2);
    return this;
  }
  squareRoot() {
    this.number = Math.sqrt(this.number);
    return this;
  }
  exponent(num) {
    this.number = Math.pow(this.number, num);
    return this;
  }

  result() {
    console.log(this.number);
    this.number = 1;
    return this;
  }
};

