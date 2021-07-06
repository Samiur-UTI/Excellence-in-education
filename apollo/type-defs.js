import gql from 'graphql-tag'
const typeDefs = gql`
  type Student {
    _id: ID!
    name: String!
    email: String!
    phone: Int!
    dateOfBirth: String!
    subjects: [Subject]
  }  
  type Subject {
      value: String!
      label:String!
  }
  type Query {
    students: [Student]!
    subjects: [Subject]!
    student(id: ID): [Student]
    subject(id: ID): [Subject]
  }
  input StudentInput {
    name: String!
    email: String!
    phone: Int!
    dateOfBirth: String!
    subjects: [SubjectInput]!
  }
  input SubjectInput {
    value: String!
    label:String!
  }
  input UpdateStudentInput {
    name: String
    email: String
    phone: Int
    dateOfBirth: String
    subjects: [SubjectInput]
  }
  input UpdateSubjectInput{
    value: String
    label:String
  }
  type Mutation {
    createStudent(student:StudentInput): Student
    createSubject(subject:SubjectInput): Subject
    updateStudent(id:ID, student:UpdateStudentInput): Student
    updateSubject(id:ID, subject:UpdateSubjectInput): Subject
    deleteStudent(id: ID): String
    deleteSubject(value:String): String
  }
`

export default typeDefs