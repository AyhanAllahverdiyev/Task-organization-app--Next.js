import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'
import CreateButton from './CreateButton'
 const Tickets = () => {
 
 

  return (
    <main >
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets:</small></p>
           <CreateButton />

         </div>


 
      </nav>
       <Suspense fallback={<Loading/>}>      
            <TicketList />
      </Suspense>
      
 
 
 
    </main>
    
    )
}

export default Tickets 