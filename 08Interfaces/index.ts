import type { IGame, DLC } from "./types";
const tlou: IGame = {
  id: 1,
  title: "The last of us",
  description: "A game",
  genre: "Action",
  platform: ["PS3", "PS4", "PS5", "PC"],
  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A plage Tale, Metro`)
  }
}
if(tlou.getSimilars) {
  tlou.getSimilars(tlou.title);
}
console.log(tlou.title);

const leftbehind: DLC = {
  id: 2,
  title: "The Last of Us - Left Behind",
  description: "DLC ..................",
  genre: "action",
  platform: ["PS3", "PS4", "PS5", "PC"],
  originalGame: tlou,
  newContent: ["New story", "New characters"]
}
console.log(leftbehind);

class CreateGame implements IGame {
  id: number;
  title: string;
  description: string;
  genre: string;
  platform?: string[] | undefined;

  constructor(id: number, title: string, description: string, genre: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.genre = genre;
  }
}