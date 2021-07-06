import React,{useEffect} from 'react'
import {DELETE_SUBJECT} from '../../../apollo/queries'
import {useRouter} from 'next/router'
import { useMutation } from '@apollo/client';
import {Container} from "@material-ui/core"
export default function Delete() {
    const [deleteStudent] = useMutation(DELETE_STUDENT);
    const router = useRouter()
    console.log(router)
    const {pathName} = router
    const {studentId} = query
    async function remove(arg){
        await deleteStudent({
            variables:{
                id:arg
            }
        })
    }
    // useEffect(() => {
    //     try {
    //         remove(studentId)
    //     } catch (error) {
    //         console.log(JSON.stringify(error, null, 2));
    //     }
    //     return router.push('/subjects')
    // },[])
    return (
        <Container>
            <h1>The Item will be deleted</h1>
        </Container>
    )
}
