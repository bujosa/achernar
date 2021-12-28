const express = require("express");
const http = require("http");

class Server {
  constructor() {
    this.app = express();

    this.port = process.env.PORT || 8080;

    this.server = http.createServer(this.app);
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

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
