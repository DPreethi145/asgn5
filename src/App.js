import React from 'react'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import Contact from './Contact'
import Navbar from './Navbar'
import Students from './Students'
import Home from './Home'



const App = () => {
  return (
    <> 
        <BrowserRouter>
            <Navbar />
          
            <Routes>
                <Route path='/' element={<Home /> } />
                <Route path='/students' element={<Students /> } />
                <Route path='/students-Data' element={<Students /> } />
                <Route path='/students-Data/:id' element={<Students /> } />
                <Route path='/contact' element={<Contact /> } />
                
            </Routes>
        </BrowserRouter>
    </>
  )
}
export default App
