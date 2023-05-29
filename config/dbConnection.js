const mongoose = require("mongoose");

exports.connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTON_STRING);
    console.log(
      connect?.connection?.host,
      connect?.connection?.name,
      "database connected"
    );
  } catch (error) {
    console.log(error, "err");
    process.exit(1);
  }
};
