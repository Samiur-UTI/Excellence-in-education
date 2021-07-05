import React from 'react'
import { dummyStudents } from "../../staticstorage/storage"
import { Container,List,ListSubheader,makeStyles} from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import Item from "../../components/listItem"
import gql from 'graphql-tag'
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
    }
}))
const StudentsQuery = gql`
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
export default function Students() {
    const { loading, error, data } = useQuery(StudentsQuery)
    const classes = useStyles()
    if (loading) return 'loading users...'
    if (error) {
        console.log(JSON.stringify(error, null, 2));
        return 'error while loading users'
    }
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
                {dummyStudents.map(item =>(
                   <Item key={item.name} data={item}/>
                ))}
            </List>
        </Container>
    )
}
