import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
const Contact = () => {
  return (
    <div className={styles.cotainer}>
      <h1 className={styles.title}>Contact Us Comrade</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
          src='/callus.png'
          alt='Contact'
          fill={true}
          className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input}/>
          <input type='email' placeholder='email' className={styles.input}/>
          <textarea
          className={styles.textarea}
          placeholder='message'
          cols='30'
          rows='10'
          />
          <Button url='#' text='send'/>
        </form>
      </div>
    </div>
  )
}

export default Contact