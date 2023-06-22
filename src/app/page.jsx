import Image from 'next/image'
import styles from './page.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
               <h1 className={styles.title} >The Techmasters Community Platform</h1>
               <p className={styles.desc}>Where Masters of tech are created ,some are born of course</p>
               <button className={styles.button}>See Our Community</button>
      </div> 
      <div className={styles.item}>
      <Image src='https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={600} height={400} className={styles.img} alt=''/>
      </div>
    
    </div>
  )
}
