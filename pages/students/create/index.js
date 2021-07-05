import React from 'react'
import StudentForm from '../../../components/form'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: "50%",
    },
  },
}));
export default function CreateStudent() {
    // const { loading, error, data } = useQuery(FETCH_SUBJECTS)
    // const classes = useStyles()
    // if (loading) return (
    //     <div className="classes.circle">
    //         <CircularProgress/>
    //     </div>
    // )
    // if (error) {
    //     console.log(JSON.stringify(error, null, 2));
    //     return 'error while loading users'
    // }
    // const {subjects} = data;
    return (
        <div>
            <StudentForm/>
        </div>
    )
}
