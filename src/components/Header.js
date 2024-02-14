import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='flex gap-x-3 mt-6'>
            <Link to={"/"} className='border py-2 px-4 rounded-md hover:bg-gray-300 text-lg' >Login</Link>
            <Link to={"/register"} className='border py-2 px-4 rounded-md hover:bg-gray-300 text-lg' >Register</Link>
        </div>
    )
}

export default Header