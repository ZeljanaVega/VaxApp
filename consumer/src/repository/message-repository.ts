let messages = [];

export const getAll = () => {
  return messages;
};

export const addNewMessage = (message) => {
  messages.push(message);
  return message;
};

export const verifyShipment = (id: string) => {
  let shipment = messages.find((x) => x.id === id);
  if (shipment) {
    shipment.customerId = "costumer_id_1";
    shipment.customerVerified = true;
    deleteShipment(id);
  } else {
    shipment = `Shipment with ID={${id}} does not exist`;
  }

  return shipment;
};

export const deleteShipment = (id: string) => {
  let result = "";
  const shipment = messages.find((x) => x.id === id);
  const index = messages.indexOf(shipment);

  if (index >= 0) {
    messages.splice(index, 1);
    result = `Shipment with ID={${id}} deleted successfully`;
  } else {
    result = `Shipment with ID={${id}} does not exist`;
  }
};
