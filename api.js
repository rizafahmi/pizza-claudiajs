const Api = require("claudia-api-builder");
const getPizzas = require("./handlers/get-pizzas");

const api = new Api();

api.get("/", () => "Welcome to pizza API");
api.get("/pizzas", () => getPizzas());
api.get("/pizzas/{id}", req => getPizzas(req.pathParams.id), {
  error: 404
});

module.exports = api;
