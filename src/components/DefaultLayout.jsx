import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider.jsx';

export default function DefaultLayout() {

    const {user, token} = useStateContext()

    if(!token){
        return <Navigate to="/login1"/>
    }

    const onLogout = (ev) => {
      ev.preventDefault()
    }

  return (
    <div id='defaultLayout'>

      {/* Sidebar */}
      <aside>
        <Link to='/dashboard'>Dashboard</Link>
        <Link to='/users'>Users</Link>
      </aside>
      <div className='content'>

        {/* Header */}
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
            <a href="#" onClick={onLogout} className='btn-logout'>Logout</a>
          </div>
        </header>

        {/* Content */}
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  )
}
