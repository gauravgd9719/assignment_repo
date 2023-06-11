const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/1/api/", async (req, res) => {
  try {
    let requestbody = req.body;
    let { phoneNumber } = requestbody;

    const response = await axios.post("https://chimpu.xyz/api/post.php", {
      phonenumber: phoneNumber,
    });

  
    res.status(200).send({ header: response.headers });
  } catch (error) {
    res.status(500).send({ message: error.response?.data || error.message }); // optional chaining
  }
});

module.exports = router;
