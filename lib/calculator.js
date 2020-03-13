
class Calculator {
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    add(){
         this.result =  this.num1 + this.num2;
    }

    subtract(){
        this.result =  this.num1 - this.num2;
    }

    multiply(){
        this.result =  this.num1 * this.num2;
    }

    divide(){
        this.result =  this.num1 / this.num2;
    }

    getResult(){
        return this.result;
    }
}

module.exports = Calculator;