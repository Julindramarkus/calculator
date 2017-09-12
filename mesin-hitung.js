"use strict"
module.exports = class MesinHitung {
  constructor(){
    this.x = 1;
    this.PI = Math.PI;
  }

  add(x){
    this.x +=x;
    return this;
  }

  subtract(x){
    this.x -=x;
    return this;
  }

  multiply(x){
    this.x *=x;
    return this;
  }

  devide(x){
    this.x /=x;
    return this;
  }

  square() {
   this.x = Math.pow(this.x, 2);
   return this;
 }

 exponent(x) {
   this.x = Math.pow(this.x, x);
   return this;
 }

 squareRoot() {
   this.x = Math.sqrt(this.x);
   return this;
 }

  result(){
    console.log(this.x);
    }
}
