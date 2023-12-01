import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return(
    <div>
        <ul>
            <li>
               <Link to='/sidebarPatient'></Link>
            </li>
            <li>
               <Link to='/userProfil'></Link>
            </li>
        </ul>

    </div>
   )

 }

 export default Navigation