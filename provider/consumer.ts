import {
  KafkaClient as Client,
  Consumer,
  Message,
  Offset,
  OffsetFetchRequest,
  ConsumerOptions,
} from "kafka-node";

const kafkaHost = "172.23.139.55:9092";

export function subscribe(
  topic: string,
  callback: (arg0: string) => void
): void {
  const client: Client = new Client({ kafkaHost });

  //var kafka = require("kafka-node");
  // const offset = new kafka.Offset(client);
  // offset.fetchLatestOffsets([topic], function (error, offsets) {
  //   if (error) return error;
  //   console.log(offsets[topic][0]); //returns offset that is read latest
  // });

  const topics: OffsetFetchRequest[] = [{ topic: topic, partition: 0 }];
  const options: ConsumerOptions = {
    autoCommit: true,
    fetchMaxWaitMs: 1000,
    fetchMaxBytes: 1024 * 1024,
  };

  const consumer: Consumer = new Consumer(client, topics, options);

  consumer.on("error", function (err: Error): void {});

  client.refreshMetadata([topic], (err: Error): void => {
    const offset = new Offset(client);

    if (err) {
      throw err;
    }

    consumer.on("message", function (message: Message): void {
      callback(message.value.toString());
    });

    /*
     * If consumer get `offsetOutOfRange` event, fetch data from the smallest(oldest) offset
     */
    consumer.on("offsetOutOfRange", (topic: OffsetFetchRequest): void => {
      offset.fetch([topic], function (err, offsets): void {
        if (err) {
          return console.error(err);
        }
        const min = Math.min.apply(null, offsets[topic.topic][topic.partition]);
        consumer.setOffset(topic.topic, topic.partition, min);
      });
    });
  });
}
