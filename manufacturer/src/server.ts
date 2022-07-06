import express from "express";
import bodyParser from "body-parser";
import shipmentRouter from "./router/shipment-routes";
import { subscribe } from "../../provider/consumer";
import * as shipmentService from "./service/shipmen-service";

const app = express();
app.use(bodyParser.json());
app.use("/", shipmentRouter);

subscribe("shipment-verified", async (message) => {
  try {
    await shipmentService.update(JSON.parse(message));
  } catch (ex) {
    console.log(`ignore ${typeof message}`);
  }
});

app.listen(3002, () => {
  console.log("Listening on port 3002");
});
