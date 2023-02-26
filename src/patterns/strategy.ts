// Паттерн Стратегия

// Cart Example
const baseStrategy = (amount) => {
  return amount;
};

const premiumStrategy = (amount) => {
  return amount * 0.8;
};

const platinumStrategy = (amount) => {
  return amount * 0.6;
};

class AutoCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  setAmount(amount) {
    this.amount = amount;
  }

  checkout() {
    return this.discount(this.amount);
  }
}

export const baseCustomer = new AutoCart(baseStrategy);
export const premiumCustomer = new AutoCart(premiumStrategy);
export const platinumCustomer = new AutoCart(platinumStrategy);

baseCustomer.setAmount(50000);
console.log(baseCustomer.checkout()); //50000

premiumCustomer.setAmount(50000);
console.log(premiumCustomer.checkout()); //40000

platinumCustomer.setAmount(50000);
console.log(platinumCustomer.checkout()); //30000

// User Example

const userStrategy = (login) => {
  return {
    login,
    root: "default",
    canRedactMessages: false,
    canCreateArticle: false,
  };
};

const moderatorStrategy = (login) => {
  return {
    login,
    root: "moderator",
    canRedactMessages: true,
    canCreateArticle: false,
  };
};

const adminStrategy = (login) => {
  return {
    login,
    root: "admin",
    canRedactMessages: true,
    canCreateArticle: true,
  };
};

// Стратегия может быть любой и мы передаем ее в конструктор
// Класс с конструктором остается неизменным, меняются лишь стратегии

class CreateUser {
  constructor(setUserRights) {
    this.setUserRights = setUserRights;
  }

  getRights(login) {
    return this.setUserRights(login);
  }
}

// Генерируем объекты с помощью определенной стратегии
export const userRights = new CreateUser(userStrategy);
export const moderatorRights = new CreateUser(moderatorStrategy);
export const adminRights = new CreateUser(adminStrategy);

console.log(userRights.getRights("Peter"));
console.log(moderatorRights.getRights("Peter Parker"));
console.log(adminRights.getRights("Peter Parker - Spider Man"));

// Реализация без класса

const logger = (strategy, level, message) => {
  return strategy(level, message);
};

const logToConsoleStrategy = (level, message) => console[level](message);

logger(logToConsoleStrategy, "log", "Это сообщение будет в консоле");

// Реализация User без класса

const userRightsCreator = (strategy, login) => {
  return strategy(login);
};

console.log(userRightsCreator(userStrategy, "111"));
console.log(userRightsCreator(moderatorStrategy, "222"));
console.log(userRightsCreator(adminStrategy, "333"));
