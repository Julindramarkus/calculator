"use strict";
class MesinHitung{
    constructor(){
        this.initial_number = 1;
        this.PI = Math.PI;
    }

    set x(num){
        this.initial_number = num;
    }

    get x(){
        return this.initial_number;
    }


    add(num){
        this.initial_number += num
        return this
    }

    substract(num){
        this.initial_number -= num;
        return this
    }

    divide(num){
        this.initial_number /= num;
        return this
    }

    multiply(num){
        this.initial_number = Math.round(this.initial_number*num);
        return this
    }

    exponent(num){
        this.initial_number = Math.round(Math.pow(this.initial_number,num));
        return this
    }
    square(){
        this.initial_number = Math.round(Math.pow(this.initial_number,2))
        return this
    }

    squareRoot(){
        this.initial_number = Math.sqrt(this.initial_number)
        return this
    }   

    result(){
        console.log(this.initial_number)
        return this
    }

}


export {MesinHitung as default}