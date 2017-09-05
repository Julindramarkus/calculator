export class mesinHitung {

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
    console.log(this.i);
  }

  multiply(i) {
    this.i = Math.round(this.i*i);;
    return this;
  }

  akar(){
    this.i = Math.sqrt(this.i);
    return this;
  }

  kuadrat() {
    this.i = Math.round(Math.pow(this.i, 2));
    return this;
  }

  pangkat(i) {
    this.i = Math.round(Math.pow(this.i, i));
    return this;
  }

  hasil(){
  console.log(this.i);
  }
}
