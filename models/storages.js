const { Storage } = require("@google-cloud/storage");
const uuid = require("uuid");

class Storages {
  constructor() {
    this.storage = new Storage({
      keyFilename: process.env.GOOGLE_APPLICATION_STORAGES_CREDENTIALS,
      projectId: process.env.GOOGLE_CLOUD_PROJECT,
    });

    this.bucket = this.storage.bucket(process.env.GOOGLE_CLOUD_STORAGE_BUCKET);
  }

  async upload(file, filename) {
    const name = uuid.v4() + filename;
    const blob = await this.bucket.file(name);
    const blobStream = blob.createWriteStream();

    blobStream.on("error", (err) => {
      console.log(err);
    });

    blobStream.on("finish", () => {});

    blobStream.end(Buffer.from(file, "base64"));

    return `https://storage.googleapis.com/${this.bucket.name}/${blob.name}`;
  }
}

module.exports = Storages;
