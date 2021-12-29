const { PubSub } = require("@google-cloud/pubsub");
const pubsub = new PubSub();

// Publish message to PubSub
const publishPubSubMessage = async function (topicName, data) {
  const dataBuffer = Buffer.from(JSON.stringify(data));
  await pubsub.topic(topicName).publishMessage({
    data: dataBuffer,
  });
};

module.exports = { publishPubSubMessage };
