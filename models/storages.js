const { Storage } = require("@google-cloud/storage");

class Storages {
  constructor() {
    this.storage = new Storage({
      keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
      projectId: process.env.GOOGLE_CLOUD_PROJECT,
    });
  }

  execute() {
    this.storage.getBuckets().then((results) => console.log(results));
  }
}

module.exports = Storages;
