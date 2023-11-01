import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Card from './card/Card'
const Main = () => {
  return (
    <div className='Main-bar'>
        
        <div>
            <Sidebar/>
        </div>
        
        <div id='center-page'>
            <Header/>
            <strong>Driver details</strong>
            <Card/>
            <strong>Driver details</strong>
            <Card/>
            <strong>Current location</strong>
            <Card/>
        </div>
    </div>
  )
}

export default Main