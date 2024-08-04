import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home';
import MechHub from './pages/Projects/MechHub/MechHub';
import GetItDone from './pages/Projects/GetItDone/GetItDone';
import './App.css'

function App() {

    return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/mechhub' element={<MechHub />} />
            <Route path='/getitdone' element={<GetItDone />} />
        </Routes>
    </Router>
    )
}

export default App
