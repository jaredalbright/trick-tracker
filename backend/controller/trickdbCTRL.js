const mongoose = require("mongoose");

const trickSchema = new mongoose.Schema({});
const Tricks = mongoose.model("TrickList", trickSchema, "trickList");

exports.getTList = async (req, res, next) => {
  try {
    let AllTricks;
    let params = req.query;
    if ("name" in params) {
        AllTricks = await Tricks.find({ $text: { $search: params["name"] } }).limit(20);
    } else {
      if ('rotation' in params) {
        params['rotation'] = parseInt(params.rotation);
      }
      AllTricks = await Tricks.find(params).limit(20);
    }

    return res.status(200).json({
      success: true,
      count: AllTricks.length,
      data: AllTricks,
    });
  } catch (error) {
    return res.status(500).json({
      sucess: false,
      error: "Server Error",
    });
  }
};
