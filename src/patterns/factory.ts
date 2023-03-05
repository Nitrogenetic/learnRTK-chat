export class Factory {
  name: string;
  jobTitle: string;

  constructor(name, jobTitle) {
    this.name = name;
    this.jobTitle = jobTitle;
  }
}

const boss = new Factory("John", "Boss");
const secretary = new Factory("Lisa", "secretary");

console.log("boss: ", boss);
console.log("secretary: ", secretary);
