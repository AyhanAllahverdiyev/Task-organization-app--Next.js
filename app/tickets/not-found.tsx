import React from 'react'
import Link from 'next/link'
const NotFound = () => {
  return (
    <main className='text-center '>
        <div  className='m-5'> 
        <h2 className='text-3xl m-5'>We Hit a Brick Wall</h2>
        <p>We could not find the ticket you were looking for.</p>
        <p style={{margin:20}}>Go back to all <Link href='/tickets'> tickets</Link></p>
        <div style={{height:'50px'}}></div>
        </div>
    </main>
  )
}

export default NotFound
