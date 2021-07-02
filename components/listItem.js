import React,{useState} from 'react'
import {ListItem,Collapse,ListItemText,List,makeStyles} from '@material-ui/core'
import { ExpandLess,ExpandMore} from '@material-ui/icons'
import Link from "next/link"
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
                    <List component="div" disablePadding className={classes.udop}>
                        <ListItem button className={classes.nestedUp}>
                            {/* <Link href="/update"/> */}
                            <ListItemText primary="READ STUDENT INFO"/>
                        </ListItem>
                        <ListItem button className={classes.nestedUp}>
                            {/* <Link href="/update"/> */}
                            <ListItemText primary="UPDATE STUDENT INFO"/>
                        </ListItem>
                        <ListItem button className={classes.nestedDel}>
                            {/* <Link href="/delete"/> */}
                            <ListItemText primary="DELETE STUDENT INFO"/>
                        </ListItem>
                    </List>
                </Collapse>
            </ListItem>
        </>
    )
}
