'use client'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import styles from './page.module.css'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
const Dashboard = () => {
  // const [data,setData] = useState([])
  // const [err,setErr] = useState(false)
  // const [isLoading,setIsLoading] = useState(false)

  // useEffect(() => {
  // const getData = async()=>{
  //   setIsLoading(true);
  //   const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
  //     cache:'no-store'
  //   });
  //   if(!res.ok){
  //     setErr(true)
  //   }
  //   const data = await res.json()
  //   setData(data)
  //   setIsLoading(false);
  // }
  // getData
  // }, [])
  // 
  const session = useSession()
  const router = useRouter()
  const fetcher = (...args) => fetch(...args).then((res) => res.json())
  const { data, error ,mutate,isLoading} = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  )
  console.log(data)
  if (session.status ==='loading'){
    <p>loading...</p>
  }
  if (session.status ==='unauthenticated'){
    router?.push('/dashboard/login')
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts',{
        method:'POST',
        body:JSON.stringify({
          title,
          desc,
          img,
          content,
          username:session.data.user.name,
        }),
      }),
      mutate();
      e.target.reset()
    } catch (error) {
      alert(error)
    }
  }
 const handleDelete = async (id)=>{
  try {
    await fetch(`/api/posts/${id}`,{
      method:'DELETE',
    }),
    mutate();
  } catch (error) {
    alert(error)
  }
 }

  if (session.status ==='authenticated'){
    return(
      <div className={styles.container}>
          <div className={styles.posts}>
            {isLoading? 'loading': data?.map((post)=>(
               <div className={styles.posts} key={post._id}>
               <div className={styles.imgContainer}>
                <Image height={200} width={500}  className={styles.img}  src={post.img} alt=''/>
                </div>
               <h2 className={styles.postTitle}>{post.title}</h2>
               <span className={styles.delete} onClick={()=>handleDelete(post._id)}>x</span>
              
              </div>
            ))}
          </div>
            <form className={styles.new} onSubmit={handleSubmit}>
              <h1>Add New Post</h1>
              <input type='text' placeholder='Title' className={styles.input}/>
              <input type='text' placeholder='Description' className={styles.input}/>
              <input type='text' placeholder='Image' className={styles.input}/>
              <textarea type='text' placeholder='Content' className={styles.textarea}
              cols={'30'}
              rows={'10'}
              />
              <button className={styles.button}>Add</button>
            </form>
      </div>
    )
  }
}

export default Dashboard