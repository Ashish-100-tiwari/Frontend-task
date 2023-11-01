import React from 'react'
import myimg from '../../../img/my.jpg'
const Card = () => {
  return (
    <div className='main-card'>
        <img src={myimg} alt="" />
       <div>
       <div className='info'>
            <p>Driver name</p>
            <strong>Ramesh</strong>
        </div>
        <div className='info'>
            <p>Driving licence no.</p>
            <strong>ABCD12345</strong>
        </div>
        <div className='info'>
            <p>Driving exprience</p>
            <strong>5 years</strong>
        </div>
        <div className='info'>
            <p>Controlling bus</p>
            <strong>4</strong>
        </div>
        <div className='info'>
            <p>Gender</p>
            <strong>Male</strong>
        </div>
        <div className='info'>
            <p>DOB</p>
            <strong>20.05.2020</strong>
        </div>
        <div className='info'>
            <p>Joined school</p>
            <strong>19 sept 2023</strong>
        </div>
        <div className='info'>
            <p>Email</p>
            <strong>abc@123.com</strong>
        </div>
        <div className='info'>
            <p>Modile No.</p>
            <strong>9876543210</strong>
        </div>
        <div className='info'>
            <p>Address</p>
            <strong>421/c, Chandni Chowk, Delhi-123456</strong>
        </div>
       </div>
    </div>
  )
}

export default Card