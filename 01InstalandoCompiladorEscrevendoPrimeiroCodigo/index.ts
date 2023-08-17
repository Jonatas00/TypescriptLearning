const inputA = document.getElementById("inputA") as HTMLInputElement;
const inputB = document.getElementById("inputB") as HTMLInputElement;
const button = document.getElementById("button") as HTMLInputElement;

function sum(a: number, b: number) {
  return a + b;
}

button.addEventListener("click", () => {
  console.log(sum(Number(inputA.value), Number(inputB.value)))
})
