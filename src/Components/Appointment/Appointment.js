import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Appointment() {
  return (
      <div className='bg-slate-200 ' >
      <nav className='space-x-8  text-center mb-10 w-2/4 mx-auto bg-gray-200 p-5 border-2  hover:bg-slate-300 hover:text-blue-800 font-semibold rounded'>
      <Link className='hover:bg-white p-5 rounded-md duration-300' to='feature' >Upcoming Appointment</Link>
      <Link className='hover:bg-white p-5 rounded-md duration-300'  to='new'> Past Appointment  </Link>
      <Link className='hover:bg-white p-5 rounded-md duration-300'   to='report'>Medical Record  </Link>
      </nav>
      <Outlet/>
      </div>
  )
}

export default Appointment;