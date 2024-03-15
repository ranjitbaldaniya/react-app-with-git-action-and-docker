import React from 'react'
import  { Link } from 'react-router-dom'

const Home = () => {


  return (
    <div>Home

        <Link to="/profile">Take me to profile</Link>
    </div>
  )
}

export default Home