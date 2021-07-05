import React from 'react'
import {useRouter} from 'next/router'
import StudentForm from '../../../components/form'
import { gql, useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {FIND_STUDENT} from '../../../apollo/queries'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: "50%",
    },
    justifyContent:'center'
  },
}));
export default function UpdateStudent() {
    const router = useRouter()
    const {query} = router
    const {studentId} = query
    const { loading, error, data } = useQuery(FIND_STUDENT,{variables:{id:studentId}})
    const classes = useStyles()
    if (loading) return (
        <div className="classes.root">
            <CircularProgress/>
        </div>
    )
    if (error) {
        console.log(JSON.stringify(error, null, 2));
        return 'error while loading users'
    }
    const {student} = data
    return (
        <div>
            <StudentForm formData={student[0]}/>
        </div>
    )
}
