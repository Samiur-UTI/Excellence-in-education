import {MongoClient} from 'mongodb'
import {CONNECTION} from './cred'
// POST /api/new-student

async function handler (req,res){
    if(req.method === 'POST'){
       try {
            const data = req.body;
            const client = await MongoClient.connect('mongodb+srv://samiurkhan:samiur1234@cluster0.uqt26.mongodb.net/ulka?retryWrites=true&w=majority')
            const db = client.db()
            const studentsCornerCollection = db.collection('studentscorner')
            const result = await studentsCornerCollection.insertOne(data)
            console.log(result)
            client.close();
            res.status(201).json({message:'Student info saved successfully'})
        } catch (error) {
            console.error(error)
       }
    }
}
export default handler;