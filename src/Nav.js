import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AddRecepie from './components/AddRecepie'
import ViewReceipe from './components/ViewReceipe'
import {NavLink,Outlet} from'react-router-dom'
export default function Nav() {
  return (
    <div>
<nav>
        <ul>
          <li>
            <NavLink to="/">AddRecepie</NavLink>
          </li>
         
       
          <li>
            <NavLink to="ViewReceipe">Recepie</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
