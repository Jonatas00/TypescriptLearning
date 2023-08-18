export interface IGame {
  id: number;
  title: string;
  description: string;
  readonly genre: string;
  platform?: string[];
  getSimilars?: (title: string) => void
}
export interface DLC extends IGame {
  originalGame: IGame;
  newContent: string[];
}