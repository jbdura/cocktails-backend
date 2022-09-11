import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/transactions"> List Transactions </Link></li>
          <li><Link to="/transactions/new"> Create Transaction </Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar