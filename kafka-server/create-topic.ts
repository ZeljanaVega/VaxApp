const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  brokers: ["172.23.139.55:9092"],
});

const shipmentSent = "shipment-sent";
const shipmentVerified = "shipment-verified";

const main = async () => {
  const admin = kafka.admin();
  await admin.connect();
  // await admin.deleteTopics({
  //   topics: ["shipment-sent", "shipment-verified"],
  // });
  await admin.createTopics({
    topics: [
      { topic: shipmentSent, numPartitions: 2, replicationFactor: 1 },
      { topic: shipmentVerified, numPartitions: 2, replicationFactor: 1 },
    ],
  });

  admin.disconnect();
};

main().then(() => {
  console.log("Topics created successfully!");
});
