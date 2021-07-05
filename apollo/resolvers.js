import {ObjectId} from 'mongodb'
const resolvers = {
    Query: {
      //fetch all students
      students: async (_parent, _args, _context, _info) => {
        const posts = await _context.db.collection('students').find().toArray();
        return posts
      },
      //fetch all subjects
      subjects: async (_parent, _args, _context, _info) => {
        const posts = await _context.db.collection('subjects').find().toArray();
        return posts
      },
      //fetch a single student
      student: async (_parent, _args, _context, _info) => {
        const {id} = _args
        try {
          const post = await _context.db.collection('students').find(ObjectId(id)).toArray()
          return post
        } catch (error) {
          console.log(error)
        }
      },
      //fetch a single subject
      subject: async (_parent, _args, _context, _info) => {
        const {id} = _args
        const post = await _context.db.collection('subjects').find(ObjectId(id)).toArray()
        return post
      }
    },
    Mutation: {
      //create a new student
      createStudent: async (_parent, _args, _context, _info) => {
        try {
            const {name,email,phone,dateOfBirth,subjects} = _args.student
            const newStudent = {
            name:name, 
            email:email, 
            phone:phone, 
            dateOfBirth:dateOfBirth,
            subjects:subjects
            }
            await _context.db.collection('students').insertOne(newStudent)
            return newStudent
        } catch (error) {
            console.log(error)
        }
      },
      //create a new subject
      createSubject: async (_parent, _args, _context, _info) => {
          const {value,label} = _args.subject
          const newSubject = {
            value, 
            label
          }
          await _context.db.collection('subjects').insertOne(newSubject)
          return newSubject
      },
      //delete a student
      deleteStudent: async (_parent, _args, _context, _info) => {
          const {id} = _args
          await _context.db.collection('students').deleteOne({"_id":ObjectId(id)})
          return "Deleted"
      },
      //delete a subject
      deleteSubject: async (_parent, _args, _context, _info) => {
        const {id} = _args
        await _context.db.collection('subjects').deleteOne({"_id":ObjectId(id)})
        return "Deleted"
      },
      //update a student (Must ensure form field is not empty on client side)
      updateStudent: async (_parent, _args, _context, _info) => {
       try {
          const {id,student} = _args
          const {name,email,phone,dateOfBirth,subjects} = student
          await _context.db.collection('students').updateOne({"_id":ObjectId(id)},{$set:{name,email,phone,dateOfBirth,subjects}})
       } catch (error) {
         console.log(error.message)
       }
      },
      //update a category (Must ensure form field is not empty on client side)
      updateSubject: async (_parent, _args, _context, _info) => {
        const {id,subject} = _args
        const {value,label} = subject
        await _context.db.collection('subjects').updateOne({"_id":ObjectId(id)},{$set:{value,label}})
      }
    }
}

export default resolvers