import React, { Fragment } from 'react'
import './App.css'
import RegistrationFormNew from './components/RegistrationFormNew'
import ShoData from './components/ShoData'
import DataContextProvider from './context/dataContext'

function App () {
  return (
    
    <DataContextProvider>
      
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-6">
              <br></br>
              <br></br>
              <RegistrationFormNew />
            </div>
          <div className="col-mdd-3"></div>
          </div>
          <br></br>
          <ShoData />
        </div>

    </DataContextProvider>
    
  )
}

export default App
