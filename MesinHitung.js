'use strict'
class MesinHitung{
      constructor(){
        this.initNum = 1;
        this.PI = Math.PI;
      }

      set x(num){
        this.initNum = Num;
      }

      get x(){
        return this.initNum;
      }

      tambah(num){
          this.initNum = this.initNum + num; //or this.initNum += num;
          return this;
      }

    kurang(num){
        this.initNum = this.initNum - num;  //or this.initNum -= num;
        return this;
    }
    pembagian(num){
        this.initNum /= num;
        return this;
    }
    perkalian(num){
      this.initNum *= num;
      return this;
    }
    square(num){
        this.initNum = math.pow(this.initNum, 2); // fungsiluas lingkaran
        return this;
    }
    exponent(num){
        this.initNum = math.pow(this.initNum, num); //fungsi pangkat
        return this;
    }
    squareRoot(num){
        this.initNum = math.sqrt(this.initNum); //fungsi akar
    }
    result(){
      console.log(this.initNum);
      this.resultNum = 1;
      return this;
    }
  }

  export {MesinHitung as default}
