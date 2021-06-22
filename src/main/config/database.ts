import { connect } from "mongoose";

export const setupDatabase = async () => {
  await connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  console.log('MongoDB connected');
  
}