
import {MongoClient} from 'mongodb'

// nextjs_project
//sShnXd5RFMlCiswr
async function handler(req,res){
    if(req.method === 'POST'){
        const data = req.body;
        const {title, image, address, description } =data;
        const client = await MongoClient.connect('mongodb+srv://nextjs_project:sShnXd5RFMlCiswr@cluster0.jiiff.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetsup');
        const result = meetupsCollection.insertOne(data);
        console.log(result);
        res.status(201).json({message: 'meetups inserted!'})
    }
}
export default handler;