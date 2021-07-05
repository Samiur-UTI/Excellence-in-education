import React,{useEffect} from 'react'
import {DELETE_STUDENT} from '../../../apollo/queries'
import {useRouter} from 'next/router'
import { useMutation } from '@apollo/client';
import {Container} from "@material-ui/core"
export default function Delete() {
    const [deleteStudent] = useMutation(DELETE_STUDENT);
    const router = useRouter()
    const {query} = router
    const {studentId} = query
    async function remove(arg){
        await deleteStudent({
            variables:{
                id:arg
            }
        })
        router.push('/students')
    }
    useEffect(() => {
        try {
            remove(studentId)
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
        }
    },[])
    return (
        <Container>
            <h1>The Item will be deleted</h1>
        </Container>
    )
}
