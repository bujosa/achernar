const Server = require("./models/server");
const Storages = require("./models/storages");

require("dotenv").config();

const server = new Server();
server.execute();

const storages = new Storages();
storages.execute();

// // Functions
// function decodeBase64Json(data) {
//   return JSON.parse(Buffer.from(data, "base64").toString());
// }

// function uploadPicture(image) {
//   console.log("Upload picture");
// }
