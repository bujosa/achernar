const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  profilePicture: {
    default: null,
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

UserSchema.method("toJSON", function () {
  const { version, _id, ...object } = this.toObject();
  object.uid = _id;
  return object;
});

module.exports = model("User", UserSchema);
