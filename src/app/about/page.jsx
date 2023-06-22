import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
       <Image
        src='https://images.pexels.com/photos/907826/pexels-photo-907826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
        fill={true}
        alt='about us image'
        className={styles.img}/>
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>The Tech Ladies</h1>
          <h2 className={styles.imgDesc}>The Queens of Tech in the Masters Community</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
      <div className={styles.item}>
      <h1 className={styles.title}>Who are the Tech Ladies</h1>
      <p className={styles.desc}>
      A woman in tech serves. She thinks not only of what a career in tech can do for her, but what skills she can use to make an impact on her community, country and world. Once she finds what her passion is, a woman in tech thinks about what she can do to make it better for others.
      </p>
      </div>
      <div className={styles.item}>
      <h1 className={styles.title}>Who are the Tech Ladies</h1>
      <p className={styles.desc}>
      A woman in tech serves. She thinks not only of what a career in tech can do for her, but what skills she can use to make an impact on her community, country and world. Once she finds what her passion is, a woman in tech thinks about what she can do to make it better for others.
      </p>
      <Button url='/contact' text='Contact'/>
      </div>
     
      </div>
    </div>
  )
}

export default About