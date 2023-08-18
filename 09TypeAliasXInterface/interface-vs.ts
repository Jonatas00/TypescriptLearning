// Interface

interface IGame {
  title: string;
}

interface IDLC {
  extra: string;
}

interface IGameCollection extends IGame, IDLC {}

class CreateGame implements IGameCollection {
  title: string;
  extra: string;
}

interface IgetSimilars {
  (title: string): void;
}

////

// Não é possível definir tuplas com interface

// Posso fazer múltiplas declarações, elas são unidas com o mesmo nome

interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: "bla",
  b: "foo"
}
