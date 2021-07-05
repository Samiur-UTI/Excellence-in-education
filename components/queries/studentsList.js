import { gql} from "@apollo/client";

const FETCH_ALL_STUDENTS = gql`
    query students {
        _id
        name
        email
        phone
        dateOfBirth
        subjects
    }
`
export default FETCH_ALL_STUDENTS