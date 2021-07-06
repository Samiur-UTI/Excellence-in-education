import React from 'react'
import { Container,List,ListSubheader,makeStyles,CircularProgress} from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks'
import Item from "../../components/listItem"
import {FETCH_SUBJECTS} from '../../apollo/queries'
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
export default function Subjects() {
    const { loading, error, data } = useQuery(FETCH_SUBJECTS)
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
    const {subjects} = data
    console.log(subjects)
    return (
        <Container>
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                <h1>List of Subjects</h1>
            </ListSubheader>
            }
            className={classes.root}
            >
                {subjects.map(item =>(
                   <Item key={item.value} data={item}/>
                ))}
            </List>
        </Container>
    )
}

