import * as shipmentService from "../service/shipmen-service";
import { NextFunction, Request, Response } from "express";
import Shipment from "../entities/shipment";
import { v4 as uuid } from "uuid";
export const getAllShipments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let shipments: Shipment[] = [];
  try {
    shipments = await shipmentService.getAll();
  } catch (error) {
    throw error;
  }

  res.status(200).send(shipments);
};

export const addShipment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    id,
    vaccineName,
    quantity,
    manufacturingDate,
    manufacturerId,
    authorityId,
    customerId,
  } = req.body;

  let shipment: Shipment = {
    id,
    vaccineName,
    quantity,
    manufacturingDate,
    manufacturerId,
    authorityId,
    customerId,
    authorityVerified: false,
    customerVerified: false,
  };

  let result = {};
  try {
    shipment.id = uuid();
    result = await shipmentService.create(shipment);
  } catch (error) {
    throw error;
  }

  res.status(201).send(result);
};

export async function getById(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  let result = {};

  try {
    result = await shipmentService.getById(id);
  } catch (error) {
    throw error;
  }

  res.status(200).send(result);
}
