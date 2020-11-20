import React, { Fragment } from 'react'
import './App.css'
import RegistrationFormNew from './components/RegistrationFormNew'
import ShoData from './components/ShoData'
import DataContextProvider from './context/dataContext'

function App () {
  return (
    
    <DataContextProvider>
      
      <div className='App'>    
        <div className="container">
          <div className="row">
            <RegistrationFormNew />
            <br></br>
            <ShoData />
          </div>
        </div>
      </div>

    </DataContextProvider>
    
  )
}

export default App
