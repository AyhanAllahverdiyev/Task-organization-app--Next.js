'use client'
import React from 'react';
import {useRouter} from 'next/navigation';
import { Delete } from '@mui/icons-material';
 interface Props {
  id: string;
}

const DeleteTicket: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:4000/tickets/${id}`, {
        method: 'DELETE',
      });
  
      if (res.ok) {
        console.log('Ticket deleted successfully');
         router.push('/tickets'); // Navigate back to the tickets page
         router.refresh(); // Refresh the router

      } else {
        console.error('Failed to delete ticket:', res.status);
      }
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };
  

  return (
    <button onClick={handleDelete}>
          <Delete  sx={{color:'darkslategrey'}}/>
          </button>
  );
}

export default DeleteTicket;
