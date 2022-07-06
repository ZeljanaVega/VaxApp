import { Request, Response, NextFunction } from "express";
import * as shipmentService from "../service/shipment-service";

export const getAllShipments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let result = [];
  try {
    result = await shipmentService.getShipments();
  } catch (error) {
    throw error;
  }

  res.status(200).send(result);
};

export const verifyShipment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  let result = {};

  try {
    result = await shipmentService.verify(id);
  } catch (error) {
    throw error;
  }

  res.status(201).send(result);
};
