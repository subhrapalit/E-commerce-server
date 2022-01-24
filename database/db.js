import mongoose from 'mongoose';



const Connection = async (URL) => {

    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database Connected while WALKING');
    }
    catch (error) {
        console.log('Error: ', error.message);
    }
}
export default Connection;
