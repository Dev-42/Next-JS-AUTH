import mongoose from "mongoose";

const connectToDB = async () => {
  const connectionUrl =
    "mongodb+srv://devbhattacharya42:QlRaP2PkOa9joguy@blogcluster.trrmu.mongodb.net/";
  try {
    await mongoose.connect(connectionUrl);
    console.log("Connected to MongoDB database successfully");
  } catch (e) {
    console.log(e);
    console.log("Error connected to Database");
  }
};
export default connectToDB;
