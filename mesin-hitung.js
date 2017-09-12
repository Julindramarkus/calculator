"use strict"
module.exports = class MesinHitung {
  constructor(){
    this.y = 1;
    this.PI = Math.PI;
  }

  add(x){
    this.y  +=x // y = y + x
    return this;
  }

  subtract(x){
    this.y -= x // y = y - x;
    return this;
  }

  divide(x){
    this.y  /= x // y = y / x
    return this;
  }

  multiply(x){
    this.y  *= x // y = y * x
    return this;
  }

  squareRoot(){
    this.y  = Math.sqrt(this.y) // y = y ^ 1/x
    return this;
  }

  square(x){
    this.y  = Math.pow(this.y,2) // y = y ^ x
    return this;
  }

  exponent(x){
  //  this.y  = Math.exp(x) // y = exp ^ x
    this.y  = Math.pow(this.y, x)
    return this;
  }
  result(){
    console.log(this.y);
    }
}
