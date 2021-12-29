const express = require("express");
const http = require("http");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT || 8080;

    dbConnection();

    this.server = http.createServer(this.app);
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true, limit: "50mb" }));
    this.app.use(express.json({ limit: "50mb" }));

    // End Points
    this.app.use("/", require("../router/upload-image"));
  }

  execute() {
    this.middlewares();
    this.server.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}

module.exports = Server;
