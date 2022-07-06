import express from "express";
import bodyParser from "body-parser";
import { subscribe } from "../../provider/consumer";
import shipmentRouter from "./router/shipment-router";
import { addNewMessage } from "./repository/message-repository";
const app = express();

app.use(bodyParser.json());
app.use("/", shipmentRouter);

subscribe("shipment-sent", (message) => {
  try {
    message = JSON.parse(message);
    console.log(message);
    addNewMessage(message);
  } catch (ex) {
    console.log(`ignore ${message}`);
  }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
