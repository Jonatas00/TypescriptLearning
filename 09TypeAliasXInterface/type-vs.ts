// Type Alias

type Game = {
  title: string;
}
type DLC = {
  extra: string;
}

type GameCollection = Game & DLC;

class CreateGameType implements GameCollection {
  title: string;
  extra: string;
}

type getSimilars = (title: string) => void;

////

// É possível declarar tuplas


// Não é possível fazer múltiplas declarações