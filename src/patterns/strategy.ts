// Паттерн Стратегия
// То, что использует стратегию - контекст, поэтому эти функции так подписаны, хотя это необязательно.
// Стратегия может быть любой.
// Класс с конструктором (контекст) остается неизменным, меняются лишь стратегиию.

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

class AutoCartContext {
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

export const baseCustomer = new AutoCartContext(baseStrategy);
export const premiumCustomer = new AutoCartContext(premiumStrategy);
export const platinumCustomer = new AutoCartContext(platinumStrategy);

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

class CreateUserContext {
  constructor(setUserRightsStrategy) {
    this.setUserRightsStrategy = setUserRightsStrategy;
  }

  getRights(login) {
    return this.setUserRightsStrategy(login);
  }
}

// Генерируем объекты с помощью определенной стратегии
export const userRights = new CreateUserContext(userStrategy);
export const moderatorRights = new CreateUserContext(moderatorStrategy);
export const adminRights = new CreateUserContext(adminStrategy);

console.log(userRights.getRights("Peter"));
console.log(moderatorRights.getRights("Peter Parker"));
console.log(adminRights.getRights("Peter Parker - Spider Man"));

// Реализация без класса

const loggerContext = (strategy, level, message) => {
  return strategy(level, message);
};

const logToConsoleStrategy = (level, message) => console[level](message);

loggerContext(logToConsoleStrategy, "log", "Это сообщение будет в консоле");

// Реализация User без класса

const userRightsCreatorContext = (strategy, login) => {
  return strategy(login);
};

console.log(userRightsCreatorContext(userStrategy, "111"));
console.log(userRightsCreatorContext(moderatorStrategy, "222"));
console.log(userRightsCreatorContext(adminStrategy, "333"));
