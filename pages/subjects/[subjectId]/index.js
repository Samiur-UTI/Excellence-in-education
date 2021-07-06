import React from 'react'
import {useRouter} from 'next/router'
import {useQuery} from '@apollo/react-hooks'
import {FETCH_STUDENTS} from '../../../apollo/queries'
import { Container,makeStyles,CircularProgress} from '@material-ui/core'
import { FolderOpenOutlined } from '@material-ui/icons'
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
export default function Subject() {
    const { loading, error, data } = useQuery(FETCH_STUDENTS)
    const router = useRouter()
    const {query} = router
    const {subjectId} = query
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
    const {students} = data
    function oldSchool(arr,id){
        let x = []
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr[i].subjects.length;j++){
                if (arr[i].subjects[j].value === String(id)){
                    x.push(arr[i])
                } else {
                    break
                }
            }
        }
        return x
    }
    return (
        <Container>
            <h3>Students of {subjectId}</h3>
            <ul>
                {oldSchool(students,subjectId).map(item =>(
                    <li key={item.phone}>{item.name}</li>
                ))}
            </ul>
        </Container>
    )
}
