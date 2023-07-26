import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../public/image/logo.svg'

const Logo = () => {
  return (
    <div>
      <Link to="/" className="text-2xl font-bold">
          <img src="/image/logo.svg"/>
        </Link>
    </div>
  )
}

export default Logo