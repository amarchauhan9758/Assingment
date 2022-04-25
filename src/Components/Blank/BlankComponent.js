import React from 'react'
import { Link } from 'react-router-dom';

function BlankComponent() {
  return (
    <div className='bg-white  min-h-screen'>
      <nav>
      <Link to='/' >Messages</Link>
      <Link to='/' >Overview</Link>
      <Link to='/' >Calender</Link>
      <Link to='/' >Documents</Link>
      </nav>
    </div>
  )
}

export default BlankComponent
