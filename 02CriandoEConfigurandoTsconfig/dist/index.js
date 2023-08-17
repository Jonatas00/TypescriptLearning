"use strict";
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
const button = document.getElementById("button");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", () => {
    console.log(sum(Number(inputA.value), Number(inputB.value)));
});
