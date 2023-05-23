import Head from 'next/head'
import { Tab } from '@headlessui/react'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import React, { useEffect, useState } from "react"
import { useRouter } from 'next/router'
import {auth} from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import axios from 'axios'
// //顯示所有留言(所有用戶)

// const AllMessage = async () => {
//   try {
//     const res = await axios.get('http://localhost:8080/api/MessageBoard/');
//     const messages = res.data.message;
//     const messageContainer = document.getElementById("message");
//     const lastDisplayedMessageId = messageContainer.dataset.lastDisplayedMessageId || ""; // 获取已显示的最后一条消息的ID
//     return messages
//     // messages.forEach((message) => {
//     //   const messageId = message._id;
  
//     //   // 判断是否为新的消息
//     //   if (messageId > lastDisplayedMessageId) {
//     //     const username = message.UserName;
//     //     const body = message.body;
       
//     //   }
//     // });
  
//     // // 更新最后一条已显示消息的ID
//     // const lastMessage = messages[messages.length - 1];
//     // const lastMessageId = lastMessage._id;
//     // messageContainer.dataset.lastDisplayedMessageId = lastMessageId;
//   } catch (error) {
//     console.error(error);
//   }
// }
//編輯該留言(userid為當前用戶的留言)
const EditMessage = async (event) => {
  event.preventDefault()
  const user=auth.currentUser
  const userName=user.displayName
  try{

  }catch(error){
    console.log(error)
  }
}
//刪除留言(當前用戶)
const DeleteMessage = async (event) => {
  event.preventDefault()
  const user=auth.currentUser
  const uuid=user.uid
  try{
    
  }catch(error){
    console.log(error)
  }
}
// //新增留言(當前用戶)
const AddMessage = async (event) => {
  event.preventDefault()
 
  // const token= localStorage.getItem('token') //傳統方式token
  // const token2= auth.token //傳統方式token
  const user=auth.currentUser
  const userName=user.displayName


  const email=user.email
  const uuid=user.uid
  // console.log(user)
  // console.log(userName)
  // console.log(email)
  // console.log(uuid)
 
  try {
    let payload = {
      uuid:uuid,
      UserName: userName,
      body: body.value,
    };
    // const headers = {
    //   Authorization: `Bearer ${token}`,
    // };
    const res = await axios.post('http://localhost:8080/api/MessageBoard/megs', payload);

    // 無法取得當前token
    // const res = await axios.post('http://localhost:8080/api/MessageBoard/megs', payload, { headers });
    console.log(res.data);
  } catch (error) {
    console.log(error)
    // Handle the error
  }
}



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function TechNote() {
    const [token ,setToken] = useState('')
    const [user,loading]=useAuthState(auth)
    const [messages,setMessages]=useState([])
    useEffect(() => {
        // setToken(localStorage.getItem('token'))
        (async()=>{
          const res = await axios.get('http://localhost:8080/api/MessageBoard/');
          const messages = res.data.message;
        
          console.log(messages)
          setMessages(messages)
        })()
    },[])
    console.log(messages)

    if (loading) return <h1>Loading ....</h1>
    
    if (user || token !="")
    // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <>
      <Head>
        <title>TechNote - Eason Wu</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="Eason Wu技術研究區"
        intro="這裡是Eason Wu技術研究區域歡迎各位指教"
      >
        <div className="space-y-20">
          <SpeakingSection title="物聯網">
            <Appearance
              href="https://hackmd.io/@Eason2392/rJ_FMi-Ao"
              title="如何用 Google Sheets / Excel 當作資料庫？"
              description="用 Google Sheets / Excel 當作資料庫"
              event="2023/02/21"
              cta="查看詳情"
            />
             
          </SpeakingSection>
          <SpeakingSection title="雲技術筆記">
            <Appearance
              href="https://picasso623.notion.site/AWS-a372e50fbc084066a88d7d5d47ae24cc"
              title="AWS 雲端基礎從業人員重點"
              description="AWS 雲端基礎從業人員重點"
              event="2022/12"
              cta="查看詳情"
            />
            <Appearance
              href="https://picasso623.notion.site/GCP-Storage-01444cd5f5f948208f67f5c749a4f81c"
              title="GCP Storage 雲存儲"
              description="GCP Storage 雲存儲"
              event="2023/02"
              cta="查看詳情"
            />
            
          </SpeakingSection>
          
        </div>
    <div><br></br></div>
   { user || token !== null ? 
    <div>
      <form action="">
      <Tab.Group>
        {({ selectedIndex }) => (
          <>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                <label htmlFor="comment" className="sr-only">
                  Comment
                </label>
                {/* <div>
                  <textarea
                    rows={1}
                    name="UserName"
                    id="UserName"
                    className="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-40 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="留言更新處"
                  />
                </div> */}
                <div>
                  <textarea
                    rows={5}
                    name="body"
                    id="body"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                    placeholder="留下你的名言吧!"
                    defaultValue={''}
                  />
                </div>
              
              </Tab.Panel>
            </Tab.Panels>
          </>
        )}
      </Tab.Group>
      <div className="mt-2 flex justify-end">
        {/* <button
        onClick={AllMessage}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          顯示留言
        </button> */}
        <button
          onClick={AddMessage}
          className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >新增</button>
      </div>
      <div id='message' data-last-displayed-message-id="" className=' text-zinc-800 dark:text-zinc-100'>
       
        {messages.map(item => (<>
        <p>誰說的: {item.UserName}</p>
          <p>說啥?: {item.body}</p>
          <hr/>
        </>))}
      
      </div>
    </form>
    </div>: <h1>此處為：登入後顯示留言板</h1>}
      </SimpleLayout>
    </>
  )
}
