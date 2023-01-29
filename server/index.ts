import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  // const config = useAppConfig()
  const MONGODB_URL =
    "mongodb+srv://hamzahir:MDBazmah98@cluster0.geuf2sy.mongodb.net/amazonProducts?retryWrites=true&w=majority";
  // "mongodb://http://localhost/27017/nitro"
  try {
    // {useNewUrlParser: true}
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
