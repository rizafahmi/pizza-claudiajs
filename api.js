const Api = require("claudia-api-builder");
const getPizzas = require("./handlers/get-pizzas");
const createOrder = require("./handlers/create-order");
const updateOrder = require("./handlers/update-order");
const deleteOrder = require("./handlers/delete-order");

const api = new Api();

api.get("/", () => "Welcome to pizza API");
api.get("/pizzas", () => getPizzas());
api.get("/pizzas/{id}", req => getPizzas(req.pathParams.id), {
  error: 404
});
api.post("/orders", req => createOrder(req.body), {
  success: 201,
  error: 400
});
api.put("/orders/{id}", req => updateOrder(req.pathParams.id, req.body), {
  success: 201,
  error: 400
});
api.delete("/orders/{id}", req => deleteOrder(req.pathParams.id), {
  error: 400
});
module.exports = api;
