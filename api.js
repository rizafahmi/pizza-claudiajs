const Api = require("claudia-api-builder");

const api = new Api();

api.get("/pizzas", () => [
  "Capricciosa",
  "Quattro Formaggi",
  "Napoletana",
  "Margherita"
]);

module.exports = api;
