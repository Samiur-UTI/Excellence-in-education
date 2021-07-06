import gql from 'graphql-tag'
export const FIND_STUDENT = gql`
    query FetchStudent($id:ID!){
        student(id:$id){
            _id
            name
            email
            phone
            dateOfBirth
            subjects{
                value
                label
            }
        }
    }
`
export const FETCH_STUDENTS = gql`
    query Students{
        students{
            _id
            name
            email
            phone
            dateOfBirth
            subjects{
                value
            }
        }
    }
`
export const FETCH_SUBJECTS = gql`
    query SubjectsQuery {
        subjects{
            value
            label
        }
    }

` 
export const ADD_STUDENT = gql`
    mutation CreateStudent($input:StudentInput){
        createStudent(student: $input){
            name
            email
            phone
            dateOfBirth
            subjects{
                value,
                label
            }
        }
    }
`
export const UPDATE_STUDENT = gql`
    mutation UpdateStudent($id:ID,$input:UpdateStudentInput){
        updateStudent(id:$id,student: $input){
            name
            email
            phone
            dateOfBirth
            subjects{
                value,
                label
            }
        }
    }
`
export const DELETE_STUDENT = gql`
    mutation DeleteStudent($id:ID){
        deleteStudent(id:$id)
    }
`
export const ADD_SUBJECT = gql`
    mutation CreateSubject($input:SubjectInput){
        createSubject(subject:$input){
            value
            label
        }
    }

`
export const UPDATE_SUBJECT = gql`
    mutation UpdateSubject($id:ID,$input:UpdateSubjectInput){
        updateSubject(id:$id,subject:$input){
            value
            label
        }
    }
`
export const DELETE_SUBJECT = gql`
    mutation DeleteSubject($id:ID){
        deleteSubject(id:$id)
    }
`