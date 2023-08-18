"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The player ${this.name} is ${this.age} years old`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname,
            this.level = level;
    }
    get getLevel() {
        return this.level;
    }
    set setLevel(newLevel) {
        this.level = newLevel;
    }
}
const jonatas = new CharAccount("Jonatas", 20, "satuurado", 99);
jonatas.setLevel = 50;
console.log(jonatas.getLevel);
