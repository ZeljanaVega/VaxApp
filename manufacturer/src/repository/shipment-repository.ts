import Shipment from "../entities/shipment";

let shipments = [];

export const getAllShipments = async () => {
  return shipments;
};

export const updateShipment = async (shipment: Shipment) => {
  let tempShipment = shipments.find((x) => x.id === shipment.id);

  if (!tempShipment) {
    throw Error("Shipment does not exist");
  }

  const index = shipments.indexOf(tempShipment);
  shipments[index] = { ...tempShipment, ...shipment };

  return shipment;
};

export const addNewShipment = async (shipment: Shipment) => {
  shipments.push(shipment);
  return shipment;
};

export const getById = (id: string) => {
  let shipment = shipments.find((x) => x.id === id);
  return shipment;
};
