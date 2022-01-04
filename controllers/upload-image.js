const { response } = require("express");
const Storages = require("../models/storages");
const User = require("../models/user");
const { publishPubSubMessage } = require("../models/pubsub");

const uploadImage = async (req, res = response) => {
  const { file, filename, email } = decodeBase64Json(req.body.message.data);
  try {
    // Activate storage
    const storages = new Storages();

    // Upload profile picture on storage
    const imageUrl = await storages.upload(file, filename);

    // Find user by email
    const user = await User.findOne({ email });

    // Update user profile picture
    user.profilePicture = imageUrl;

    // Save profile picture in user collection
    await user.save();

    // Publish message to PubSub
    await publishPubSubMessage("updated-user", {
      where: { id: user._id },
      data: { profilePicture: user.profilePicture },
    });

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
