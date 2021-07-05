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
import CircularProgress from '@material-ui/core/CircularProgress';
import { useQuery } from '@apollo/react-hooks'
import {FETCH_SUBJECTS,ADD_STUDENT,UPDATE_STUDENT} from '../apollo/queries'
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
function subjectHandler(arr){
    let subject= [];
    arr.map((item) => {
       let subObj = {}
       let {value,label} = item
       subObj.value = value
       subObj.label = label
       subject.push(subObj)
   })
   return subject
}

const StudentForm = ({formData}) => {
  const [addStudent] = useMutation(ADD_STUDENT);
  const [updateStudent] = useMutation(UPDATE_STUDENT);
  const { loading, error, data } = useQuery(FETCH_SUBJECTS)
  const router = useRouter()
  const { control, handleSubmit } = useForm();
  const classes = useStyles()
  if (loading) return (
        <div className="classes.circle">
            <CircularProgress/>
        </div>
    )
    if (error) {
        console.log(JSON.stringify(error, null, 2));
        return 'error while loading users'
    }
  const {subjects} = data;
  const options = subjectHandler(subjects)
  const addOnSubmit = async data => {
    const {name, email,phone,dateOfBirth,subject} = data
          //for creating a new student
            try {
                await addStudent({
                    variables:{
                        input:{
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
    };
  const updateOnSubmit = async (data) => {
    const {name, email,phone,dateOfBirth,subject} = data
    const {_id} = formData
    //updating student data 
      try {
            await updateStudent({
              variables:{
                  id:_id,
                  input:{
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
        console.log(JSON.stringify(error, null, 2))
      }
  }
  if (router.pathname === '/students/create'){
    //Conditional rendering to use the form component for both create and update
    return (
        <form onSubmit={handleSubmit(addOnSubmit)}>
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
                        render={({ field: { onChange } }) => (
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={onChange}
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
                        options={options}
                        className={classes.select} 
                        />}
                        required={true}
                    />
                    <input className={classes.button} type="submit" />
            </Container>
        </form>
      );
    } else {
       const {name,email,phone,dateOfBirth,subjects} = formData
       return(
            <form onSubmit={handleSubmit(updateOnSubmit)}>
            <Container className={classes.root}>
                    <h1 className={classes.heading}>Create a new Student record</h1>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue={name}
                        render={({ field }) => <Input className={classes.textField} {...field} />}
                        required={true}
                        
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue={email}
                        render={({ field }) => <Input className={classes.textField} {...field} />}
                        required={true}
                    />
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue={phone}
                        render={({ field }) => <Input className={classes.textField} {...field} />}
                        required={true}
                    />
                    <Controller
                        name="dateOfBirth"
                        control={control}
                        defaultValue={dateOfBirth}
                        render={({ field: { onChange, value } }) => (
                            <TextField
                                id="date"
                                label="Birthday"
                                type="date"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={onChange}
                                className={classes.textField}
                            />
                        )}
                        required={true}
                    />
                    <Controller
                        name="subject"
                        control={control}
                        render={({ field,onSelect }) => <Select 
                        {...field}
                        isMulti
                        defaultValue={subjectHandler(subjects)} 
                        options={options}
                        className={classes.select}
                        onSelect={onSelect}
                        />}
                        required={true}
                    />
                    <input className={classes.button} type="submit" />
            </Container>
        </form>
       )
    }
  }
  
export default StudentForm