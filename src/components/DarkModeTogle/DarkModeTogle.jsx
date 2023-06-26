'use client'

import React, { useContext } from 'react'
import styles from './darkmode.module.css'
import Image from 'next/image'
import { ThemeContext } from '../../context/ThemeContext'
const DarkModeTogle = () => {
//  const {toggle,mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} >
        <div className={styles.icon}>
        <Image 
        src='/darmode.png'
         alt=''
         width={15}
         height={15}
        />
        </div>
        <div className={styles.icon}>
        <Image 
        src='/sun.png'
         alt=''
         width={15}
         height={15}
        />
        </div>
        <div className={styles.ball}
        // style={mode ===  "light" ? {left:'2px'}:{right:'2px'}}
        />

    </div>
  )
}

export default DarkModeTogle