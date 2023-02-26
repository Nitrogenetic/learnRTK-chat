// Паттерн Модуль
export const module = (function () {
  let store = {};

  const put = (objToPut) => {
    store = { ...store, ...objToPut };
  };
  const get = () => {
    return store;
  };

  return { put, get };
})();

module.put({ name: "Vlad" });
module.put({ surName: "Gorbach" });

console.log(module.get());
