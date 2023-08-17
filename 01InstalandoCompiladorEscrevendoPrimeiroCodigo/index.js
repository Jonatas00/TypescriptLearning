var inputA = document.getElementById("inputA");
var inputB = document.getElementById("inputB");
var button = document.getElementById("button");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    console.log(sum(Number(inputA.value), Number(inputB.value)));
});
