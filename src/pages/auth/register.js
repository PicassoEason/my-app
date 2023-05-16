

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from 'axios'
import {Link,Image} from "next/link"
export default function Register() {
  const route = useRouter()
  const [error, setError] = useState("")
  const isValidPassword = (password) => {
    const passwordRegex = /^.{8,}$/;
    return passwordRegex.test(password);
  };
  const isValidPassword2 = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };
  // -----------------------------------------------------------
  const HandleRegister = async (userName,email, password) => {
    try {
      let payload = {
        UserName:userName.toString(),
        email: email.toString(),
        password: password.toString(),
      }
      const res = await axios.post('http://localhost:8080/api/users', payload)
      console.log("this is res data ",res.data)
      route.push('/auth/login')
    } catch (error){
     if(error.response && error.response.status === 400){
     
       if (!isValidPassword(password)) {
        setError("至少八位數")
      }else if(!isValidPassword2(password)){
        setError("必須包含大小寫字母和特殊符號")
      }
     }
    if(error.response && error.response.status === 409){
      setError("Email已存在")
    }
    // setError(error.message);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const UserName = event.target[0].value
    const email = event.target[1].value
    const password = event.target[2].value
    HandleRegister(UserName,email, password);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Image
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register account
          </h2>
        </div>
        
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
            <div>
                <label htmlFor="UserName" className="block text-sm font-medium leading-6 text-gray-900">
                 UserName
                </label>
                <div className="mt-2">
                  <input
                    id="UserName"
                    name="UserName"
                    type="UserName"
                    autoComplete="UserName"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                  <div className="text-red-500">
                  {error && <div className="error">{error}</div>}
                  </div>
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                  
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
          


              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register 
                </button>
              </div>
            </form>

            <div>
              <div className="relative mt-10">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-6 text-gray-900">Or continue with</span>
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-gray-500">
            Already  to  start?{' '}
            <Link href="/auth/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login in 
            </Link>
          </p>

            </div>
          </div>
        </div>


      </div>
    </>
  )
}