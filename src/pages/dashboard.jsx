import {auth} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"
import { SimpleLayout } from '@/components/SimpleLayout'
export default function Dashboard(){
    // let emptyString = new String();
    // const token = localStorage.getItem('token')
    const [token ,setToken] = useState('')
    const [user,loading]=useAuthState(auth)
  
    console.log(token)
    const route=useRouter() 
    useEffect(() => {
      setToken(localStorage.getItem('token'))
    },[])
    if (loading) return <h1>Loading ....</h1>
    const logout=async()=>{
        auth.signOut()
        if ((!user)|| (token=="")) 
        route.push('/auth/login')
        
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (user || token !="")
    return(
        <SimpleLayout>

        <div>
            <h1 className='text-4xl text-zinc-800 dark:text-zinc-100'>Welcome to

            dashboard </h1>
            
            <button onClick={logout} className='text-cyan-500 text-2xl'>Sign out</button>
          
        </div>
        </SimpleLayout>
        
    )
}