const { Router } = require("express");

const router = Router();
const { uploadImage } = require("../controllers/upload-image");

// Example publish message to the topic
router.post("/", uploadImage);

module.exports = router;

/* 
path: api/example
*/
