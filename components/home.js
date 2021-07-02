import React from 'react'
import Link from "next/link"
import { Container,Card,CardActions,CardContent,Button,Typography,makeStyles } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height:"50vh"
    },
    container:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
      flexGrow: 1,
      fontSize: '2rem',
      marginLeft:"40%"
    },
    button: {
      fontSize: '1.5em'
    },
    text: {
        fontSize: '1.5rem'
    }
  }));
export default function Home() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Container className={classes.container}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography className={classes.text} variant="body2" component="p">
                        {"Excellence in education is when we do everything we can to make sure they become everything they can, excellence is not an accomplishment. It is a spirit, a never-ending process."}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="primary" size="medium"><Link href="/students">SEE OUR STUDENTS</Link></Button>
                </CardActions>
                <CardActions>
                    <Button variant="outlined" color="secondary" size="medium"><Link href="/subjects">CHECK OUR SUBJECTs</Link></Button>
                </CardActions>
            </Container>
        </Card>
    )
}
