import * as shipmentService from "../service/shipment-service";
import { Request, Response, NextFunction } from "express";

export const getShipments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let result = [];

  try {
    result = await shipmentService.getAllShipments();
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
