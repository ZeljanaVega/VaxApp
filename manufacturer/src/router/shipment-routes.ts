import { Router } from "express";
import * as shipmentController from "../controller/shipment-controller";

const shipmentRouter = Router();

shipmentRouter.get("", shipmentController.getAllShipments);
shipmentRouter.post("", shipmentController.addShipment);
shipmentRouter.get("/:id", shipmentController.getById);

export default shipmentRouter;
