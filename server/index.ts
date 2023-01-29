import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig()

  const MONGODB_URL = config.MONGODB_URL 
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(MONGODB_URL);
    console.log("connected to mongo");
    // mongoose
    // .connect(MONGODB_URL)
    // .then(result => {
    //   const server =  app.listen(config.PORT);
    //   const io = require('./socket').init(server);
    //   io.on('connection', socket => {
    // console.log('Client connected');
    //   });
    // })
    // .catch(err => console.log(err));
  } catch (error) {
    console.log(error);
  }
};
