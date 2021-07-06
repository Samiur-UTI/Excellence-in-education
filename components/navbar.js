import React from 'react'
import { AppBar,Toolbar,Typography,Button,makeStyles,Container } from '@material-ui/core'
import Link from "next/link"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#b30b43",
    height:"80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    flexGrow: 1,
    fontSize: '2em'
  },
  button: {
    fontSize: '1.5em'
  },
  link: {
    textDecoration: 'none'
  }
}));

export default function Navbar() {
    const classes = useStyles()
    return (
    <AppBar className={classes.root} position="static">
      <Container>
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Button className={classes.button} color="secondary"><Link href="/"><a style={{color:'white',textDecoration:'none'}}>STUDENTS CORNER</a></Link></Button>
            </Typography>
            <Button className={classes.button} color="secondary"><Link href="/students/create"><a style={{color:'white',textDecoration:'none'}}>Add a new student</a></Link></Button>
            <Button className={classes.button} color="inherit"><Link href="/subjects/create"><a style={{color:'white',textDecoration:'none'}}>Add a new subject</a></Link></Button>
          </Toolbar>
      </Container>
    </AppBar>
    )
}
