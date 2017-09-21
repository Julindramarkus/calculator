'use strict'

module.exports = class MesinHitung {
  constructor(){
    this.initial=1
    this.Pi=3.14159
  }
  set i(i){
    this.initial=i
  }
  get i(){
    return this.initial
  }
  add(i){
    this.initial += i
    return this
  }
  subtract(i){
    this.initial -= i
    return this
  }
  result(){
    console.log(Math.round(this.initial));
  }
  devide(i){
    this.initial /= i
    return this
  }
  multiply(i){
    this.initial *= i
    return this
  }
  square(i){
    this.initial = Math.pow(this.i,2)
    return this
  }
  exponent(i){
    this.initial = Math.pow(this.initial,i)
    return this
  }
  squareRoot(i){
    this.initial = Math.sqrt(this.i)
    return this
  }
}
