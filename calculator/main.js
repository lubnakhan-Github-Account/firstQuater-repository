"use strict";
let display = document.getElementById("screen");
offFunc();
function offFunc() {
    display.style.background = "black";
}
function onFunc() {
    display.value = '';
    display.style.background = "yellow";
}
