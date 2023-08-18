type charInfos = {
  nickname: string;
  class: "Dps" | "Tank" | "Healer";
  fame: number;
}

type accountInfos = {
  id: number;
  user: string;
  email: string;
}

type generalInfos = accountInfos & charInfos

const playerInformations: generalInfos = {
  id: 1,
  user: "Jonatas",
  email: "djonatas31@gmail.com",
  class: "Dps",
  nickname: "Saturado",
  fame: 50000000
}