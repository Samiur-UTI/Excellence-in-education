import React from 'react'
import { dummyStudents } from "../../staticstorage/storage"
import { Container,List,ListSubheader } from '@material-ui/core'

export default function Students() {
    return (
        <Container>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    Nested List Items
                    </ListSubheader>
                }
                className={classes.root}
                >
             </List>
        </Container>
    )
}
