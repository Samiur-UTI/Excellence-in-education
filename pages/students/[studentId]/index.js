import React from 'react';
import { useRouter } from 'next/router'
export default function Student() {
    const {query} = useRouter()

    return (
        <div>
            Individual student record of {query.studentId}
        </div>
    )
}
