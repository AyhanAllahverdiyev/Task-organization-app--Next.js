import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>There was a problem</h2>
      <p>We could not find the page you were looking for.</p>
  
      <p style={{margin:20}}>Go back to the <Link href='/' className='text-slate-900'>Dashboard</Link></p>
      <div style={{height:50}}></div>

    </main>
  );
}

export default NotFound;
