import { subscribe } from "../../../provider/consumer";
import { publish } from "../../../provider/producer";

export const receiveMessages = (topic: string) => {
  subscribe(topic, (message) => {
    console.log(message);
  });
};

export const sendMessage = (topic: string, key: string, message: string) => {
  publish(topic, key, message);
};
