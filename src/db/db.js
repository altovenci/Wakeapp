import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.Mongo_URI);
		console.log("MongoDB Connected: ${conn.connection.host");
	} catch {
		console.error("Error: ${error.message}");
	}
};

export default connectDB;
