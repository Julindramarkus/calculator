"use strict"

module.exports = class MesinHitung{
  constructor(){
    this.i = 1;
    this.PI = Math.PI;
      }

      add(i){
        this.i +=i;
        return this;
      }

      substract(i) {
        this.i -= i
        return this;
      }

      divide(i) {
        this.i =this.i/i;
        return this;

      }

      multiply(i) {
        this.i = Math.round(this.i*i);
        return this;
      }

      squareRoot(){
        this.i = Math.sqrt(this.i);
        return this;
      }

      square() {
        this.i = Math.round(Math.pow(this.i, 2));
        return this;
      }

      exponent(i) {
        this.i = Math.round(Math.pow(this.i, i));
        return this;
      }

      result(){
      console.log(this.i);
      }
    }
