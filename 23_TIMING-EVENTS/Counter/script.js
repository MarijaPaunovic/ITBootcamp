"use strict";

let btnStart = document.getElementById(`start`);
let btnStop = document.getElementById(`stop`);
let clock = document.getElementById(`clock`);
let reset = document.getElementById(`reset`);

let timer = null;
clock.value = 1;

btnStart.addEventListener(`click`, () => {
    if(timer === null){
        timer = setInterval(() => {
            clock.value++;
        }, 1000);
    }
});

btnStop.addEventListener(`click`, () => {
    clearInterval(timer);
    timer = null;
});

reset.addEventListener(`click`, () => {
    clock.value = ``;
});