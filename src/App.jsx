import React from 'react'
import Register from './Pages/Register'
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import ListingPage from './Pages/ListingPage'


const App = () => {
  return (
    <div>
       <Router>
       <Navbar></Navbar>
       
      <Routes>
        <Route path="/" element={<>Home </>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ListingPage" element={<ListingPage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App


//about context api
// first we create create cpntext  means empty store or simple word empty  varible 
// then import use contewxt empty varible  create context  
