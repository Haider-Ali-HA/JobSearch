import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className='flex justify-between items-center border bg-gray-200 w-full h-[70px] p-[2rem] font-poppin'>
        <div className='text-[25px]'>
            <h1><strong>Job</strong>Search</h1>
        </div>
        <div className='list-none flex'>
            <li className=' mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 '>Jobs</li>
            <li className=' mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 '>Companies</li>
            <li className=' mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 '>About</li>
            <li className=' mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 '>Contact</li>
            <li className=' mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 '>Blog</li>
            <li className=' mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 '>Login</li>
            <li className=' mx-3 hover:cursor-pointer hover:text-green-600 border-b-2 hover:border-green-600 '>Register</li>
        </div>

    </div>
    
    </>
  )
}

export default NavBar
