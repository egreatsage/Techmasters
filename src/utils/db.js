import mongoose from "mongoose";

mongoose.set('strictQuery', true);

const connect = async ()=>{
   
    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGO)
        console.log("successfull")

    } catch (error) {
        console.log("really failed")
    }
}
export default connect;