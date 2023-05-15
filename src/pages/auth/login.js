/* eslint-disable @next/next/no-img-element */
import {FcGoogle} from "react-icons/fc"
import {AiFillFacebook,AiFillGithub} from "react-icons/ai"
import {
     FacebookAuthProvider,
      GoogleAuthProvider,
      signInWithPopup,
    updateProfile,
    GithubAuthProvider
    } from "firebase/auth"
import { auth } from '../../utils/firebase'
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"


export default function Login() {
  const [user,loading]=useAuthState(auth)
  const route=useRouter()
  //Sign in with google
  const googleProvider=new GoogleAuthProvider()
  const GoogleLogin=async()=>{
      try{
          const result=await signInWithPopup(auth,googleProvider)
          console.log(result.user)
          route.push('/dashboard')
      }catch(error){
          console.log(error)
          
      }
  }
    // //Sign in with Facebook
    // const fbProvider = new FacebookAuthProvider()
    // const FacebookLogin=async()=>{
    //     try{
    //         const result=await signInWithPopup(auth,fbProvider)
    //         const credantial=await FacebookAuthProvider.credentialFromResult(result)
    //         const token=credantial.accessToken
    //         let photoUrl=result.user.photoURL+'?height=500&access_token='+token
    //         await updateProfile(auth.currentUser,{photoURL:photoUrl})
    //         console.log(result.user)
    //         route.push('/dashboard')
    //     }catch(error){
    //         console.log(error)
    //     }
    // }
    //Sign in with github
    const providerGithub = new GithubAuthProvider()
    const GithubLogin=async()=>{
        try{
            const result=await signInWithPopup(auth,providerGithub)
            console.log(result.user)
            route.push('/dashboard')
        }catch(error){
            console.log(error)
            
        }
    }

  useEffect(()=>{
    if(user){
        route.push('/dashboard')
    }else{
        console.log('login')
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[user])



return(
    
<>
<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" action="#" method="POST">
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
                  Sign in
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

                <div className="mt-6 grid grid-cols-2 gap-4"> 
            
                <button onClick={GoogleLogin} className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
                    <FcGoogle className="text-2xl" />
                    Sign in with Google    
                </button>

                  {/* <button onClick={FacebookLogin} className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
                    <AiFillFacebook className="text-2xl text-blue-500"  />
                    Sign in with Facebook
                </button> */}

                  <button onClick={GithubLogin} className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2">
                    <AiFillGithub className="text-2xl text-blue-500"  />
                    Sign in with Github
                </button>
            </div>
                
              </div>
            </div>
          </div>

         
        </div>
</>
)
}