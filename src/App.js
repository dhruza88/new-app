import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Profile from "./components/pages/Profile";


const App = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/user/profile' element={<Profile/>}/>

        </Routes>
    </Router>
    )

export default App;
