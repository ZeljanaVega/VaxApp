import express from "express";
import bodyParser from "body-parser";
import { subscribe } from "../../provider/consumer";
import shipmentRouter from "./router/shipment-router";
import * as messageRepository from "./repository/message-repository";

const app = express();
app.use(bodyParser.json());
app.use("/", shipmentRouter);
subscribe("shipment-sent", (message) => {
  try {
    messageRepository.addNewMessage(JSON.parse(message));
  } catch (ex) {
    console.log(`ignore ${message}`);
  }
});

app.listen(3001, () => {
  console.log("Listening on port 3001");
});
