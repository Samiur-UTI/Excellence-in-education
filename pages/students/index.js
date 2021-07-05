import React from 'react'
import { dummyStudents } from "../../staticstorage/storage"
import { Container,List,ListSubheader,makeStyles,CircularProgress} from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import Item from "../../components/listItem"
import gql from 'graphql-tag'
import {FETCH_STUDENTS} from '../../apollo/queries'
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
export default function Students() {
    const { loading, error, data } = useQuery(FETCH_STUDENTS)
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
    return (
        <Container>
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                <h1>List of Students</h1>
            </ListSubheader>
            }
            className={classes.root}
            >
                {students.map(item =>(
                   <Item key={item._id} data={item}/>
                ))}
            </List>
        </Container>
    )
}
