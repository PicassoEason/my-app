## Getting started

1. 安裝node module

```bash
npm install
```
2. 構建應用程式
```
npm run build
```

3. 開始run：
```bash
npm run dev
```
Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.
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