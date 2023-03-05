//Так же фабрики можно создавать по паттерну, вызывая внутри officeBossFactory и fabricCarpenterFactory нужную фабрику

// class OfficeFactory {
//   name: string;
//   jobTitle: string;

//   constructor(name, jobTitle) {
//     this.name = name;
//     this.jobTitle = jobTitle;
//   }
// }

// class FabricFactory {
//   name: string;
//   rank: string;

//   constructor(name, rank) {
//     this.name = name;
//     this.rank = rank;
//   }
// }

// Но в коде ниже упрощаем до функций
const officeBossFactory = () => ({
  name: "John",
  jobTitle: "Boss",
});

const fabricCarpenterFactory = () => ({
  type: "carpenter",
  rank: "3",
});

export const abstractFactory = (type: "office" | "fabric") => {
  switch (type) {
    case "office":
      return officeBossFactory;
    case "fabric":
      return fabricCarpenterFactory;
  }
};

const officeBoss = abstractFactory("office");
const fabricCarpenter = abstractFactory("fabric");

const boss = officeBoss();
const carpenter = fabricCarpenter();

console.log("boss: ", boss);
console.log("carpenter: ", carpenter);
