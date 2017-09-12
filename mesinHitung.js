module.exports = class mesinHitung{
  constructor(){
    this.i = 1;
    this.PI = Math.PI
  }
  add(i){
    this.i += i;
    return this;
  }
  substract(i){
    this.i -= i;
    return this;
  }
  divide(i) {
    this.i =this.i/i;
    return this;
    console.log(this.i);
  }
  multiply(i) {
    this.i = Math.round(this.i*i);;
    return this;
  }
  squareRoot(i){
    this.i = Math.sqrt(this.i);
    return this;
  }
  square(i){
    this.i = Math.round(Math.pow(this.i, 2));
    return this;
  }
  exponent(i){
    this.i = Math.round(Math.pow(this.i, i));
    return this;
  }
  result(i){
    console.log(this.i);
    this,i = 1;
    return this;
  }
}
