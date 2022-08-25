import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
          <main className='main'>
            <Router />
          </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
