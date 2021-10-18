import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <h1>home</h1>
      <Link to='/resumo'><h3>Bora pro resumo</h3></Link>
    </div>
  )
}

export default Home