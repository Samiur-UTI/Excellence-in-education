import React,{useState} from 'react'
import {ListItem,Collapse,ListItemText,List,makeStyles} from '@material-ui/core'
import { ExpandLess,ExpandMore} from '@material-ui/icons'
import Link from "next/link"
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
                            <Link href={"/students/" + data.name}>Read Student Details</Link>
                        </ListItem>
                        <ListItem button className={classes.nestedUp}>
                            <Link href={"/students/" + data.name +"/update"}>Update Student Details</Link>
                        </ListItem>
                        <ListItem button className={classes.nestedDel}>
                            <Link href={"/students/" + data.name + "/delete"}>Delete Student Details</Link>
                        </ListItem>
                    </List>
                </Collapse>
            </ListItem>
        </>
    )
}
