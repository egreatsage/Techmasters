import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div>@Masters. All rights reserved || Techmasters Community</div>
       <div className={styles.socials}>
        <Image src='/facebook.png' width={30}  className={styles.icon} height={25} alt='facebook'/>
        <Image src='/insta.png' width={30}  className={styles.icon} height={25} alt='insta'/>
        <Image src='/twitter.png' width={30}  className={styles.icon} height={25} alt='twitter'/>
        <Image src='/whatsapp.png' width={30}  className={styles.icon} height={25} alt='whatsapp'/>
        <Image src='/youtube.png' width={30}  className={styles.icon} height={25} alt='youtube'/>
        <Image src='/tg.png' width={30}  className={styles.icon} height={25} alt='telegram'/>
       </div>
    </div>
  )
}

export default Footer