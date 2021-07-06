import React from 'react';
import {FIND_STUDENT} from '../../../apollo/queries'
import { Container,List,ListSubheader,makeStyles,CircularProgress,Paper} from '@material-ui/core'
import {useQuery} from '@apollo/react-hooks'
import { useRouter } from 'next/router'
const useStyles = makeStyles((theme) => ({
    root:{
        width: '100%'
    },
    udop:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    nestedUp:{
        border:'20px solid #yellow'
    },
    circle: {
        display: 'flex',
        '& > * + *': {
          marginLeft: theme.spacing(2),
        },
      },
    circleContainer:{
        marginLeft: "50%",
        marginTop: "50px"
    }
}))
export default function Student() {
    const {query} = useRouter()
    const {studentId}= query
    const { loading, error, data } = useQuery(FIND_STUDENT,{variables:{id:studentId}})
    const classes = useStyles()
    if (loading) return (
        <div className="classes.circle">
            <Container className={classes.circleContainer}>
                <CircularProgress/>
            </Container>
        </div>
    )
    if (error) {
        console.log(JSON.stringify(error, null, 2));
        return 'error while loading users'
    }
    const {student} = data
    return (
        <Container>
            <Paper/>
            <h3>Here is the profile of our student {student[0].name}</h3> 
            <p>Get in touch with him!</p>
            <ul>
                <li>Contact: {student[0].phone}</li>
                <li>Email : {student[0].email}</li>
                <li>Dont forget to wish him one his birthday {student[0].dateOfBirth}</li>
            </ul>
                <p>He is doing major in: </p>
                <ul>
                    {student[0].subjects.map(subject =>(
                        <li key={subject.value}>{subject.value}</li>
                    ))}
                </ul>
            
        </Container>
    )
}
