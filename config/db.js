import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jawad:jawad@cluster0.zzhff.mongodb.net/?retryWrites=true&w=majority&appName=MernPost"
    );
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }
};

export { connectDB };
