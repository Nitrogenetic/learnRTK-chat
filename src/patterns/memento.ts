class Memento {
  value: any;

  constructor(value) {
    this.value = value;
  }
}

const creator = {
  save: (value: any) => new Memento(value),
  restore: (memento: any) => memento.value,
};

class Caretaker {
  values: any;

  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

const careTaker = new Caretaker();
careTaker.addMemento(creator.save("hello"));
careTaker.addMemento(creator.save("hello world"));
careTaker.addMemento(creator.save("hello world !!!"));

console.log(creator.restore(careTaker.getMemento(2)));
