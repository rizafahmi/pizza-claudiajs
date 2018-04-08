const updateOrder = (id, order) => {
  if (!id && !order) {
    throw new Error("Order needs an id and data for updates.");
  }
  return order;
};

module.exports = updateOrder;
