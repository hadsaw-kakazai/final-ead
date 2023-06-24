import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AddRecepie from './components/AddRecepie'
import ViewReceipe from './components/ViewReceipe'
import {Link,Outlet} from'react-router-dom'
export default function Nav() {
  return (
    <div>

        <nav>
        <ul>
          <li>
            <Link to="/">Add Recepie</Link>
          </li>
          <li>
            <Link to="/viewreceipe">View Recepie</Link>
          </li>
         
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}
