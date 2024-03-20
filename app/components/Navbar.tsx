import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from './watch-logo.png'

const Navbar = () => {
  return (
    <main>
        <nav> 
            <Image src={logo}
                alt="Helpdesk logo"
                width={200} 
                height={200}
                placeholder='blur'
                />
             <h1>Helpdesk</h1>
            <Link href='/'> Dashboard</Link>
           <Link href='/tickets'> Tickets</Link>
        </nav>
    </main>
 
 
    )
}

export default Navbar
