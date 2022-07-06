import Shipment from "../../../manufacturer/src/entities/shipment";
import * as messageRepository from "../repository/message-repository";
import * as queueService from "./queue-service";

export const getAllShipments = async () => {
  let shipments = [];

  try {
    shipments = messageRepository.getAll();
  } catch (error) {
    throw error;
  }

  return shipments;
};

export const addNewShipment = async (shipment) => {
  let result = {};
  try {
    result = await messageRepository.addNewMessage(JSON.parse(shipment));
  } catch (error) {
    throw error;
  }

  return result;
};

export const verify = async (id: string) => {
  let result;

  try {
    result = await messageRepository.verifyShipment(id);

    queueService.sendMessage(
      "shipment-verified",
      id,
      JSON.stringify({
        id,
        customerId: result.customerId,
        customerVerified: result.customerVerified,
      })
    );
  } catch (error) {
    throw error;
  }

  return result;
};
