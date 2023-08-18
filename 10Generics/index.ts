//Generics
//T: Tipo genérico padrão.
//S: States
//U, V, W: Para múltiplos tipos genéricos.
//K, V: Usado para chaves e valores em mapeamentos.
//E, A: Elemento e argumento em contextos específicos.

function useState<S extends string | number = string>() {
  let state: S;

  function getState() {
    return state;
  }
  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();

newState.setState("Hello");
console.log(newState.getState());
//newState.setState(123);
console.log(newState.getState());
