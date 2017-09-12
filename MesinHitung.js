"use strict"

module.exports = class MesinHitung{
  constructor(){
    this.num = 1;
    this.PI = Math.PI;
      }

      add(num){
        this.num +=num;
        return this;
      }

      substract(num) {
        this.num -= num
        return this;
      }

      divide(num) {
        this.num = this.num/num;
        return  this;
      }

      multiply(num) {
        this.num = Math.round(this.num*num);
        return this;
      }

      squareRoot(){ //akar 2
        this.num = Math.sqrt(this.num);
        return this;
      }

      square() {
        this.num = Math.round(Math.pow(this.num, 2)); //math round untuk buletin angka, math pow untuk mengembalikan angka asli
        return this;
      }

      exponent(num) { //pangkat
        this.num = Math.pow(this.num, num);
        return this;
      }

      result(){
        console.log(this.num);
      }
}
