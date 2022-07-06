import { publish } from "../../../provider/producer";

export const sendMessage = (topic: string, key: string, message: string) => {
  publish(topic, key, message);
};
