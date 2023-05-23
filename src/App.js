import React from 'react'
import Photo from './components/Photo'
import Fullname from './components/Fullname'
import './App.css'
import Address from './components/Address'
import Bio from './Bio'
const App = () => {
  return (
    <div className='App'>
      <Photo/>
        <div className='page'>
        <Fullname/>
      <Address/>
        </div>
      <div>
        <Bio name='shina' job='full satack dev'/>
      </div>
    </div>
  )
}

export default App
