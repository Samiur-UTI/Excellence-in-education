import React,{useState} from 'react'
import {ListItem,Collapse,ListItemText,List,makeStyles} from '@material-ui/core'
import { ExpandLess,ExpandMore} from '@material-ui/icons'
import Link from "next/link"
import {useRouter} from 'next/router'
const useStyles = makeStyles((theme) => ({
    crud:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}))
export default function Item({data}) {
    const [open, setopen] = useState(false)
    const classes = useStyles()
    const handleClick = () => {
        setopen(!open)
    }
    const router = useRouter()
    if(router.pathname !== "/subjects"){
        return (
            <>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={data.name} />
                {open ? <ExpandLess /> : <ExpandMore />}   
            </ListItem>
            <ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className={classes.crud}>
                        <ListItem button className={classes.nestedRead}>
                            <Link href={"/students/" + data._id}>Read Student Details</Link>
                        </ListItem>
                        <ListItem button className={classes.nestedUp}>
                            <Link href={"/students/" + data._id +"/update"}>Update Student Details</Link>
                        </ListItem>
                        <ListItem button className={classes.nestedDel}>
                            <Link href={"/students/" + data._id + "/delete"}>Delete Student Details</Link>
                        </ListItem>
                    </List>
                </Collapse>
            </ListItem>
        </>
        )
    } else {
        return (
            <>
            <ListItem button onClick={handleClick}>
                <ListItemText primary={data.value} />
                {open ? <ExpandLess /> : <ExpandMore />}   
            </ListItem>
            <ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding className={classes.crud}>
                        <ListItem button className={classes.nestedRead}>
                            <Link href={"/subjects/" + data.value}>See Details</Link>
                        </ListItem>
                        <ListItem button className={classes.nestedDel}>
                            <Link href={"/subjects/" + data.value + "/delete"}>Delete Student Details</Link>
                        </ListItem>
                    </List>
                </Collapse>
            </ListItem>
        </>
        )
    }
    
}
