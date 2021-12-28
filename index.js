const Server = require("./models/server");
const Storages = require("./models/storages");

require("dotenv").config();

const server = new Server();
server.execute();

const storages = new Storages();
storages.execute();
