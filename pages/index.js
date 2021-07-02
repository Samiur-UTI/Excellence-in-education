import React from 'react'
import Navbar from "../components/navbar"
import { Container,Card,CardActions,CardContent,Button,Typography,makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight:"50vh"
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  },
  body2: {
    fontSize:24,
    fontStyle:"italic"
  },
  title: {
    fontSize: 40,
  },
  pos: {
    marginBottom: 12,
  }
})
export default function Homepage() {
  const classes = useStyles()
  return (
    <>
      <Navbar/>
      <Container>
          <Card className={classes.root}>
              <Container className={classes.container}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                      Word of the Day
                    </Typography>
                    <Typography variant="body2" component="p">
                      {"Excellence in education is when we do everything we can to make sure they become everything they can, excellence is not an accomplishment. It is a spirit, a never-ending process."}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="outlined" color="primary" size="medium">SEE OUT STUDENTS</Button>
                  </CardActions>
                  <CardActions>
                    <Button variant="outlined" color="secondary" size="medium">CHECK OUR SUBJECTS</Button>
                  </CardActions>
              </Container>
          </Card>
      </Container>
    </>
  )
}
