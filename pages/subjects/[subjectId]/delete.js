import React,{useEffect} from 'react'
import {DELETE_SUBJECT} from '../../../apollo/queries'
import {useRouter} from 'next/router'
import { useMutation } from '@apollo/client';
import {Container} from "@material-ui/core"
export default function Delete() {
    const [deleteSubject] = useMutation(DELETE_SUBJECT);
    const router = useRouter()
    const {query} = router
    const {subjectId} = query
    async function remove(arg){
        await deleteSubject({
            variables:{
                val:arg
            }
        })
        router.push("/subjects")
    }
    useEffect(() => {
        try {
            remove(subjectId)
        } catch (error) {
            console.log(JSON.stringify(error, null, 2));
        }
        return 
    },)
    return (
        <Container>
            <h1>The Item will be deleted</h1>
        </Container>
    )
}
