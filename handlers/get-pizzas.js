const pizzas = require("../data/pizzas.json");

const getPizzas = pizzaId => {
  if (!pizzaId) return pizzas;

  const onePizza = pizzas.filter(pizza => pizza.id === parseInt(pizzaId, 0));
  if (onePizza.length === 1) return onePizza;
  throw new Error("The pizza you requested was not found");
};

module.exports = getPizzas;
