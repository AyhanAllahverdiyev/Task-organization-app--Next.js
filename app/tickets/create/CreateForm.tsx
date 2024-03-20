'use client'
import { useRouter } from 'next/navigation'
 import { useState } from 'react'
import React from 'react'

const CreateForm = () => {




const router = useRouter();
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [priority, setPriority] = useState('low');
const[ isLoading, setIsLoading] = useState(false);


const handleSubmit=async(e: { preventDefault: () => void })=>{
    e.preventDefault();
    setIsLoading(true);
    const ticket={
        title,
        body,
        priority,
        user_email: 'Aykhan Allahverdiyev'
    }

    const response =await fetch('http://localhost:4000/tickets',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ticket) 


    });
    if(response.status===201){
         
        router.push('/tickets');
        router.refresh  ();
    }



}


  return (
    <main>
    <form className='w-1/2' onSubmit={handleSubmit}>
        <label>
            <span>Title</span>
            <input
                type='text'
                required
                onChange={(e)=>setTitle(e.target.value)}
                value={title}
                /> 

        </label>
        <label>
            <span>Body</span>
                <textarea
                    required
                    onChange={(e)=>setBody(e.target.value)}
                    value={body}
                />

        </label>
        <label>
            <span>Priority</span>
             <select onChange={(e)=>setPriority(e.target.value)}>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>

             </select>
        </label>
        <button className='btn-primary' disabled={isLoading}>
        {isLoading && <span> Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
        
        
        </button>
    


    </form>
    <div style={{height:50}}></div>
</main>
 
  )
}

export default CreateForm
