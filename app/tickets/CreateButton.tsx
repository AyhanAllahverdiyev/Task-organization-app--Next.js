'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

 

const CreateButton = () => {
     const router= useRouter();
    const handleClick=  ()=>{
      router.refresh();
      router.push('/tickets/create');
 
    }
    

   
    return (
    <div>
        <button  className='btn-primary' onClick={handleClick}> Create New Ticket </button>
      
    </div>
  )
}

export default CreateButton
