'use client'
import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
const Navbar = () => {
    const links =[
        {
            id:1,
            title:"Home",
            url:'/'
        },
        {
            id:1,
            title:"Portifolio",
            url:'/portifolio'
        },
        {
            id:1,
            title:"Blog",
            url:'/blog'
        },
        {
            id:1,
            title:"About",
            url:'/about'
        },
        {
            id:1,
            title:"Contact",
            url:'/contact'
        },
        {
            id:1,
            title:"Dashboard",
            url:'/dashboard'
        }
    ]
  return (
    <div className={styles.container}>
        <Link className={styles.logo} href={'/'}>Techmasters</Link>
        <div className={styles.links}>
            {links.map((link)=>(
                <Link className={styles.link} key={link.id} href={link.url}>
                    {link.title}
                </Link>
            ))}
            <button
            
            className={styles.logout}
            onClick={()=>console.log("logged out")}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar