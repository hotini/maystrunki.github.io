"use strict";

let text1 = document.getElementById('text1');

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function(){
        text1.innerHTML += this.step + '<br>';
        return this;
    }
};
ladder.up().up().down().showStep().down().showStep();