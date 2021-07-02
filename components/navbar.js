import React from 'react'
import { AppBar,Toolbar,Typography,Button,makeStyles,Container } from '@material-ui/core'

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
  }
}));

export default function Navbar() {
    const classes = useStyles()
    return (
    <AppBar className={classes.root} position="static">
      <Container>
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
              WELCOME TO OUR APP!
            </Typography>
            <Button className={classes.button} color="inherit">Add new Student</Button>
            <Button className={classes.button} color="inherit">Add new Subject</Button>
          </Toolbar>
      </Container>
    </AppBar>
    )
}
