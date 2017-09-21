"use strict";

module.exports = class MesinHitung {
  constructor(){
    this.initial = 1;
    this.Pi = 3.14159;
  }

  set x(x){
    this.initial = x
  }

  get x(){
    return this.initial;
  }

  add(x){
    this.initial += x;
    return this;
  }

  subtract(x){
    this.initial -= x;
    return this;
  }
  multiply(x){
    this.initial *= x;
    return this;
  }
  divide(x){
    this.initial /= x;
    return this;
  }
  square(x){
    this.initial  = Math.pow(this.x,2)
    return this;
  }
  exponent(x){
    this.initial  = Math.pow(this.initial, x)
    return this;
  }
  squareRoot(x) {
    this.initial  = Math.sqrt(this.x)
    return this;
  }


  result(){
    console.log(Math.round(this.initial));
  }
}


// let mh = new MesinHitung();
// let Pi = mh.Pi
// mh.add(10).subtract(5).result();
// mh.add(3).multiply(4).divide(6).result();
// mh.x=7;//set jari jari 7
// console.log('nilai sekarang:' +mh.x);
// mh.multiply(2).multiply(Pi).result();
// mh.x=7;
// mh.square().multiply(Pi).result();
// mh.x=4;
// mh.exponent(3).result();
// mh.squareRoot().result();
// console.log(mh.x)
