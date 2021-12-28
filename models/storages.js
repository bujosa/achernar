const { Storage } = require("@google-cloud/storage");

class Storages {
  constructor() {
    this.storage = new Storage({
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      projectId: process.env.GOOGLE_CLOUD_PROJECT,
    });
  }

  execute() {
    // Listen for new messages in this subscription
    this.pubsub
      .subscription("capella-b-testing-topic-2")
      .on("message", (message) => {
        // Example extracting data for the message
        const { your_variables } = JSON.parse(message.data.toString());

        // In this part you can specify what you want to do with the message
        // For example you can save the message in a database
        // Or you can send an email to the user

        message.ack();
      });
  }
}

module.exports = Storages;
