import mongoose from "mongoose";

export default () => {
  const mongoString =
    "mongodb+srv://northeastern:easypassword@northeastern.8yckv1o.mongodb.net/?retryWrites=true&w=majority";

  mongoose.connect(mongoString, {}, (error: Error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Database Connected");
    }
  });
};
