const { response } = require("express");
const Storages = require("../models/storages");

const uploadImage = async (req, res = response) => {
  const { file, filename, email } = decodeBase64Json(req.body.message.data);
  try {
    const storages = new Storages();
    const imageUrl = await storages.upload(file, filename);

    res.status(200).send("OK");
  } catch (e) {
    console.log(e);

    res.status(500).send("Error");
  }
};

// Functions
function decodeBase64Json(data) {
  return JSON.parse(Buffer.from(data, "base64").toString());
}

module.exports = { uploadImage };
