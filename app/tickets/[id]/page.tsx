
import React from 'react';
import DeleteTicket from './DeleteTicket';
import {useRouter} from 'next/navigation';
import { notFound } from 'next/navigation';
import { Delete } from '@mui/icons-material';
 
interface params {
  id: string;
}

interface Ticket {
  id: string;
  title: string;
  body: string;
  priority: string;
  user_email: string;
}
 
async function getTicket(id: any) {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, { next: { revalidate: 60 } });

  if (!res.ok) {
    notFound();    
  }

  return res.json();
}

async function TicketPage({ params }: { params: params }) {
 
   
  const ticket: Ticket = await getTicket(params.id);

  return (
    <main>
      <div>
        <h2>Ticket Detail</h2>
        <nav>
          <div>
            <div>
              <h3>{ticket.title}</h3>
              <small>Created by {ticket.user_email}</small>
              <p>{ticket.body}</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </div>
            <div>
             </div>
          </div>
          <DeleteTicket id={params.id} />

        </nav>   
        <div style={{display:'flex'}}> 
         </div>
 <div style={{height:30}}></div>
 
      </div>
    </main>
  );
}

export default TicketPage;
