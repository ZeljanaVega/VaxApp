import { Router } from "express";
import * as shipmentController from "../controller/shipment-controller";

const shipmentRouter = Router();

shipmentRouter.get("", shipmentController.getAllShipments);
shipmentRouter.post("/verify/:id", shipmentController.verifyShipment);

export default shipmentRouter;
