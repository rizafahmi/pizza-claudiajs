const deleteOrder = id => {
  if (!id) throw new Error("Order ID is required.");
  return id;
};

module.exports = deleteOrder;
