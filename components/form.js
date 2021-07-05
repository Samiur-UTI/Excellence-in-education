import React from "react";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from '@material-ui/core/styles';
import {subjects} from '../staticstorage/storage'
import { useRouter } from 'next/router'
import { gql, useMutation } from '@apollo/client';
import axios from 'axios'
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
    select: {
        width:"400px",
        maxHeight:'350px',
        marginTop:'1.5em'
    },
    heading: {
        fontFamily:'"Apple Color Emoji"'
    },
    button: {
        marginTop:'1.5em',
        width:'100px'
    }
}))
const ADD_STUDENT = gql`
    mutation CreateStudent($input1:StudentInput!){
        createStudent(student: $input1){
            name
            email
            phone
            dateOfBirth
            subjects{
                value,
                label
            }
        }
    }
`
const StudentForm = () => {
  const [addStudent, { data }] = useMutation(ADD_STUDENT);
  const router = useRouter()
  const { control, handleSubmit } = useForm();
  const onSubmit = async data => {
      if(router.pathname === '/students/create'){
          console.log(data)
          //for creating a new student
            try {
                const {name, email,phone,dateOfBirth,subject} = data
                await addStudent({
                    variables:{
                        input1:{
                            name:name,
                            email:email,
                            phone:Number(phone),
                            dateOfBirth:dateOfBirth,
                            subjects:subject
                        }
                    }
                })
                router.push("/students")
            } catch (error) {
                console.log(JSON.stringify(error, null, 2));
            }
      } else {
          //for updating a student info
          router.push("/subjects")
      }
  };
  const hudai = subjects.map(subject =>{
      return {
          value:subject,
          label:subject
      }
  })
  const classes = useStyles()
  if (router.pathname === '/students/create'){
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Container className={classes.root}>
                    <h1 className={classes.heading}>Create a new Student record</h1>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input className={classes.textField} {...field} />}
                        required={true}
                        
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input className={classes.textField} {...field} />}
                        required={true}
                    />
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        render={({ field }) => <Input className={classes.textField} {...field} />}
                        required={true}
                    />
                    <Controller
                        name="dateOfBirth"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange, value } }) => (
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={onChange}
                                value={value}
                                className={classes.textField}
                            />
                        )}
                        required={true}
                    />
                    <Controller
                        name="subject"
                        control={control}
                        render={({ field }) => <Select 
                        {...field}
                        isMulti 
                        options={hudai}
                        className={classes.select} 
                        />}
                        required={true}
                    />
                    <input className={classes.button} type="submit" />
            </Container>
        </form>
      );
    };
  }
  
export default StudentForm