import Link from 'next/link';
import React from 'react'
 

async function getTickets(){
   await new Promise(resolve=>setTimeout(resolve,2000));
    const response=await fetch("http://localhost:4000/tickets", { next: { revalidate: 0 },  cache: "no-cache"}) ;
    return response.json();

}

interface Ticket  {
    id: string;
    title: string;
    body: string;
    priority: string;
    user_email: string;

}


const TicketList =  async () => {
  
  const tickets : Ticket[] = await getTickets();
 
     return (
     
        <main>
            {tickets.map(ticket=>(

                <div key={ticket.id} className='card my-5' >
                    <Link   href={`/tickets/${ticket.id}`}>
                    <h2>{ticket.title}</h2>
                    <p>{ticket.body.slice(0,200)}...</p>
                    <div className={`pill ${ticket.priority}`}>
                        {ticket.priority} priority
                    </div>
                    </Link>
                    
                </div>

            
            ))}

            {tickets.length===0 && (

                <p className='text-center'>There are no open tickets.</p>
            )}



        </main>

        
      
  )
}

export default TicketList
