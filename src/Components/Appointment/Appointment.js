import React from 'react'
import { Link, Outlet } from 'react-router-dom'


function Appointment() {
  return (
      <div className='bg-slate-200 ' >
      <nav className='space-x-10   text-center lg:mb-10  lg:w-2/4 w-full mx-auto bg-gray-200 lg:p-5 border-2  hover:bg-slate-200  font-semibold rounded'>
      <Link className='hover:bg-white  lg:p-5 rounded-md duration-300 hover:text-blue-800' to='feature' >Upcoming Appointment</Link>
      <Link className='hover:bg-white  lg:p-5 rounded-md duration-300 hover:text-blue-800'  to='new'> Past Appointment  </Link>
      <Link className='hover:bg-white  lg:p-5 rounded-md duration-300 hover:text-blue-800'   to='report'>Medical Record  </Link>
      </nav>
      <Outlet/>
      </div>
  )
}

export default Appointment;