import React from 'react'
import { Link } from 'react-router-dom'


const sidebar = () => {
  return (
    <div>
       <aside className="h-screen fixed top-0 left-0 w-60 bg-gray-900 p-5 flex flex-col justify-between">
       <div className='flex flex-col gap-4 '>
       <h1 className="text-red-900 font-bold text-4xl ">MRS</h1>
            <nav>
              <ul>
                <li className="mb-4 mt-1">
                  <Link to="/home" className="text-white text-lg">Home</Link>
                </li>
                <li className="mb-4">
                  <Link to="/watchlist" className="text-white text-lg">Watchlist</Link>
                </li>
                <li className="mb-4">
                  <Link to="/trending" className="text-white text-lg">Trending</Link>
                </li>
              </ul>
            </nav>
       </div>
            <div>
                <ul>
                  <li className="mb-4">
                    {/* <button onClick={logout} className="text-white text-lg">Logout</button> */}
                    <Link to="/logout" className="text-white text-lg">Logout</Link>
                  </li>
            
                </ul>
              </div>
          </aside>
    </div>
  )
}

export default sidebar
