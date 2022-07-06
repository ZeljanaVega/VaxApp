let messages = [];

export const addNewMessage = (message) => {
  const temp = messages.find((x) => x.id === message.id);
  if (temp) {
    throw Error(`Shipment with ID={${message.id}} already exist!`);
  } else {
    messages.push(message);
  }
};

export const getAll = () => {
  return messages;
};

export const deleteMessage = async (id: string) => {
  const shipment = messages.find((x) => x.id === id);
  const index = messages.indexOf(shipment);

  if (index >= 0) {
    messages.splice(index, 1);
  } else {
    console.log(`Message with ID=${id} does not exist`);
  }
};

export const verifyShipment = (id: string) => {
  let shipment = messages.find((x) => x.id === id);

  if (shipment) {
    shipment.authorityId = "authority_id_1";
    shipment.authorityVerified = true;
    deleteMessage(id);
  } else {
    shipment = `Shipment with ID='${id}' does not exist!`;
  }

  return shipment;
};
