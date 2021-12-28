const { response } = require("express");

const uploadImage = async (req, res = response) => {
  const { image, user } = decodeBase64Json(req.body.message.data);
  try {
    console.log(`Upload your picture`);
    res.status(200).send("OK");
  } catch (e) {
    console.log(e);
    res.status(500).send("Error");
  }
};

module.exports = { uploadImage };
