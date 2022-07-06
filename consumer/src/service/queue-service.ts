import { publish } from "../../../provider/producer";
import { subscribe } from "../../../provider/consumer";
import { addNewShipment } from "./shipment-service";

export const sendMessage = (topic: string, key: string, message: string) => {
  publish(topic, key, message);
};

export const receiveMessages = (topic: string) => {
  subscribe(topic, (message) => {
    addNewShipment(message);
  });
};
