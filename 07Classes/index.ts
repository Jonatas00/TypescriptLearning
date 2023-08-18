abstract class UserAccount {
  readonly name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old`)
  }
}

class CharAccount extends UserAccount {
  readonly nickname: string;
  private level: number;
  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname,
    this.level = level
  }
  get getLevel() {
    return this.level
  }
  set setLevel(newLevel: number) {
    this.level = newLevel
  }
}

const jonatas = new CharAccount("Jonatas", 20, "satuurado", 99);

jonatas.setLevel = 50
console.log(jonatas.getLevel)