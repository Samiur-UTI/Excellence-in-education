import React from 'react'
import { dummyStudents } from "../../staticstorage/storage"
import { Container,List,ListSubheader,makeStyles} from '@material-ui/core'
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
    const classes = useStyles()
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
