import React,{useEffect} from 'react'
import {ADD_SUBJECT} from '../../apollo/queries'
import {useMutation} from '@apollo/client'
import { useForm, Controller } from "react-hook-form";
import { Container,Input,makeStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:'5%'
    },
    textField: {
        width: '30%',
        marginTop:'1.5em'
    },
    button: {
        marginTop:'1.5em',
        width:'100px'
    }
}))
export default function CreateSubject() {
    const [addSubject] = useMutation(ADD_SUBJECT);
    const { control, handleSubmit } = useForm();
    const classes = useStyles()
    const router = useRouter()
    const addOnSubmit = async ({name}) => {
         try {
            await addSubject({
                variables:{
                    input:{
                        value: name,
                        label: name
                    }
                }
            })
            return router.push("/subjects")
         } catch (error) {
             console.log(JSON.stringify(error, null, 2))
         }
    }
    return (
        <form onSubmit={handleSubmit(addOnSubmit)}>
            <Container className={classes.root}>
                    <h1 className={classes.heading}>Create a new Subject in our corner</h1>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input className={classes.textField} {...field} />}
                        required={true}
                        
                    />
                    <input className={classes.button} type="submit" />
            </Container>
        </form>
    )
}
