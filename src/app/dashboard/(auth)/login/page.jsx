"use client"
import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {

  const session = useSession();
  const router = useRouter()

  if (session.status === 'loading'){
    return <div>Loading...</div>
  }
  if (session.status === 'authenticated'){
   router?.push('/dashboard')
  }
 
  const handleSubmit = async (e) =>{
    e.preventDefault()
     const email = e.target[0].value
     const password = e.target[1].value
     
     signIn('credentials',{email,password})
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='email' placeholder='Email' required className={styles.input}/>
        <input type='password' placeholder='Password' required className={styles.input}/>
        <button className={styles.button}>Login</button>
       </form>

       <Link href={'/dashboard/register'}>Create new account</Link>
      <button style={{padding:'10px', fontSize:'20px'}} onClick={()=>signIn("google")}>Login With Google</button>
    </div>
  )
}

export default Login