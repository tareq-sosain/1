import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://150:150@cluster0.zbkxc.mongodb.net/6000?retryWrites=true&w=majority";
    const conn = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
