import React from 'react'
import './App.css'
import {Link} from 'react-router-dom';

const Navlinks = () => {
  return (
    <>
    <div className='back'>
    <div className='buttons'>
        <Link to='/'><button className='btn'>Home</button></Link>
        <Link to='/Students'>  <button className='btn'>Students</button></Link> 
        <Link to='/Contact'><button className='btn'>Contact Us</button></Link>   
    </div>
    </div>
    </>
  )
}

export default Navlinks