import React from 'react'
import Photo from './components/Photo'
import Fullname from './components/Fullname'
import './App.css'
import Address from './components/Address'
const App = () => {
  return (
    <div className='App'>
      <Photo/>
        <div className='page'>
        <Fullname/>
      <Address/>
        </div>

    </div>
  )
}

export default App
