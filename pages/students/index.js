import React from 'react'
import {useQuery} from "@apollo/client";
import { dummyStudents } from "../../staticstorage/storage"
import { Container,List,ListSubheader,makeStyles} from '@material-ui/core'
import FETCH_ALL_STUDENTS from '../../components/queries/studentsList';
import Item from "../../components/listItem"
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
export default function Students() {
    const {loading,error, data} = useQuery(FETCH_ALL_STUDENTS)
    console.log(data)
    const classes = useStyles()
    if (error)
      return <div>Error loading students.</div>;
    if (loading)
      return <div>Loading</div>;
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
