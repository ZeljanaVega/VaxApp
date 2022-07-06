import * as messageRepository from "../repository/message-repository";
import * as queueService from "./queue-service";

export const getShipments = async () => {
  let shipments = [];

  try {
    shipments = messageRepository.getAll();
  } catch (error) {
    throw error;
  }

  return shipments;
};

export const verify = (id: string) => {
  let result;

  try {
    result = messageRepository.verifyShipment(id);
    queueService.sendMessage(
      "shipment-verified",
      result.id,
      JSON.stringify({
        id,
        authorityId: result.authorityId,
        authorityVerified: result.authorityVerified,
      })
    );
  } catch (error) {
    throw error;
  }
  return result;
};
