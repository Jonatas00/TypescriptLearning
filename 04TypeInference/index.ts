//Type Inference
let message = "Mensagem automática do sistema..."

//message = 2  <-- Não pode   - Type 'number' is not assignable to type 'string'.

window.addEventListener("click", (e) => {      // e: MouseEvent
  console.log(e.target);
})