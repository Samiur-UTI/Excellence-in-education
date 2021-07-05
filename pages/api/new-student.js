import {MongoClient} from 'mongodb'
require('dotenv').config()

// POST /api/new-student

async function handler (req,res){
    if(req.method === 'POST'){
       try {
            const data = req.body;
            const client = await MongoClient.connect(process.env.MONGO_DB_URI)
            const db = client.db()
            const studentsCornerCollection = db.collection('students')
            const result = await studentsCornerCollection.insertOne(data)
            client.close();
            res.status(201).json({message:'Student info saved successfully'})
        } catch (error) {
            console.error(error)
       }
    }
}
export default handler;