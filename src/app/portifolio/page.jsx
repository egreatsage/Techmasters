import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
const Portifolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href='/portifolio/illustrations' className={styles.item}>
          <span className={styles.title}>Illustrations</span>
        </Link>
        <Link href='/portifolio/websites' className={styles.item}>
          <span className={styles.title}>Websites</span>
        </Link>
        <Link href='/portifolio/applications' className={styles.item}>
          <span className={styles.title}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portifolio