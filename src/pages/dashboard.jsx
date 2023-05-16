import {auth} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"

export default function Dashboard(){
    // let emptyString = new String();
    // const token = localStorage.getItem('token')
    let token = ''
    const [user,loading]=useAuthState(auth)
    console.log(token)
    const route=useRouter() 
    if (loading) return <h1>Loading ....</h1>
    const logout=async()=>{
        if ((!user)|| (token=="")) route.push('/auth/login')
        auth.signOut()
    }
    if (user || token !="")
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        let token = localStorage.getItem('token')

    },[])
    return(
        <div>
            <h1>Welcome to Your dashboard </h1>
            <button onClick={logout}>Sign out</button>
        </div>
    )
}