"use strict";

let pText = document.getElementById('calc');

let numForm = document.forms.num;
let myNum1 = numForm.elements.number1;
let myNum2 = numForm.elements.number2;


function checkNum(e){
    return (e.key >= '0' && e.key <= '9' || e.key == '.'
        || e.key == 'Backspace'
        || e.key == 'ArrowRight' || e.key == 'ArrowLeft'
        || (e.ctrlKey && e.key == 'a') || (e.ctrlKey && e.key == 'c')
        || (e.ctrlKey && e.key == 'v') || (e.ctrlKey && e.key == 'x')
        || (e.ctrlKey && e.key == 'z'));
}
myNum1.onkeydown = function(event){
    return checkNum(event)
}
myNum1.oninput = function(event){ 
    calculator.read();
    pText.innerHTML = calculator.sum() + '<br>' + calculator.mul();
};

myNum2.onkeydown = function(event){
    return checkNum(event);
};
myNum2.oninput = function(event){
    calculator.read();
    pText.innerHTML = calculator.sum() + '<br>' + calculator.mul();
};

let calculator = {
    read(){
        this.a = +myNum1.value;
        this.b = +myNum2.value;
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};