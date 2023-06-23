import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const BlogPost = () => {
  return (
    <div className={styles.container}>
       <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
          Checking the network cables, modem and router
          </h1>
          <p className={styles.desc}>
          Reconnecting to Wi-Fi
         Running Windows Network Diagnostics
          </p>
          <div className={styles.author}>
           <Image
           src={'https://images.pexels.com/photos/3223341/pexels-photo-3223341.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
           alt=''
           width={40}
           height={40}
           className={styles.avatar}
           />
           <span className={styles.username}>
            Mikey Gafild
           </span>
          </div>
        </div>
         <div className={styles.imageContainer}>
          <Image 
          src={'https://images.pexels.com/photos/3059082/pexels-photo-3059082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}
          fill={true}
          className={styles.image}
          />
         </div>
       </div>
       <div className={styles.content}>
           <p className={styles.text}>
           No Internet
Try:
Checking the network cables, modem and router
Reconnecting to Wi-Fi
Running Windows Network Diagnostics
ERR_INTERNET_DISCONNECTED
           </p>
       </div>
    </div>
  )
}

export default BlogPost