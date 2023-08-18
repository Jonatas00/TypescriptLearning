// accountInfo
// charInfo
// playerInfo

type accountInfo = {
  id: number;
  name: string;
  email?: string;
}

const account: accountInfo = {
  id: 1,
  name: "Jonatas",
}

type charInfo = {
  nickname: string;
  level: number;
}

const char: charInfo = {
  nickname: "Saturado",
  level: 9
}

type playerInfo = accountInfo & charInfo

const player: playerInfo = {
  id: 1,
  name: "Jonatas",
  nickname: "Saturado",
  level: 15,
  email: 'djonatas31@gmail.com'
}