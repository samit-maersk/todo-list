import React from 'react'
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    
    <>
      <div className='container'>
        <div className='navbar'>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='content'>
          <Outlet />
        </div>
      </div>
      <hr/>
      <footer>
        @footer.net
      </footer>
    </>
  )
}

export default Layout