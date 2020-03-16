
         const assert =  require('assert')
         const { Before, Given, When, Then } = require('cucumber')
         const Calculator = require('../../../lib/calculator');

         let calculator;
         
         Given('the numbers {int} and {int}', function (int1, int2) { 
              calculator = new Calculator(int1,int2);
            });

        When('they are added together', function () {
            // Write code here that turns the phrase above into concrete actions
            calculator.add();
            });

        When('they are subtracted together', function () {
            // Write code here that turns the phrase above into concrete actions
            calculator.subtract();
            });

        When('they are multiplied together', function () {
            // Write code here that turns the phrase above into concrete actions
            calculator.multiply();
            });

        When('they are divided together', function () {
            // Write code here that turns the phrase above into concrete actions
            calculator.divide();
            });


        Then('should the result be {int}', function (int) {
            assert.equal(calculator.getResult(),int);
            });