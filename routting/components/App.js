import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './Header'
import Services from './Services'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import './Routing.css'

function App() {
    return (
        <BrowserRouter>                       
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App