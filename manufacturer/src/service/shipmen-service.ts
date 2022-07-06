import Shipment from "../entities/shipment";
import * as shipmentRepository from "../repository/shipment-repository";
import * as queueService from "./queue-serice";

export const getAll = async () => {
  let shipments: Shipment[] = [];
  try {
    shipments = await shipmentRepository.getAllShipments();
  } catch (error) {
    throw error;
  }

  return shipments;
};

export const create = async (shipment: Shipment) => {
  let newShipment: any = {};
  try {
    newShipment = await shipmentRepository.addNewShipment(shipment);
    if (newShipment) {
      queueService.sendMessage(
        "shipment-sent",
        newShipment.id,
        JSON.stringify(newShipment)
      );
    }
  } catch (error) {
    throw error;
  }

  return newShipment;
};

export const update = async (shipment: Shipment) => {
  let updatedShipment = {};
  try {
    updatedShipment = await shipmentRepository.updateShipment(shipment);
    console.log("service update ", updatedShipment);
  } catch (error) {
    throw error;
  }

  return updatedShipment;
};

export const getById = async (id: string) => {
  let shipment = {};
  try {
    shipment = await shipmentRepository.getById(id);
  } catch (error) {
    throw error;
  }

  return shipment;
};
