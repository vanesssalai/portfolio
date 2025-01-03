import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from './pages/Home/Home';
// import MechHub from './pages/Projects/MechHub/MechHub';
// import GetItDone from './pages/Projects/GetItDone/GetItDone';
// import UltimateTTT from './pages/Projects/UltimateTTT/UltimateTTT';
import New from './pages/New/New';
import OrientationLock from './pages/OrientationLock/OrientationLock';
import './App.css'

function App() {

    return (
        <Router>
            <OrientationLock>
                <Routes>
                {/* <Route path='/' element={<Home />} />
                <Route path='/mechhub' element={<MechHub />} />
                <Route path='/getitdone' element={<GetItDone />} />
                <Route path='/ultimatettt' element={<UltimateTTT />}/> */}
                <Route path='/' element={<New />}/>
                </Routes>
            </OrientationLock>
        </Router>
    );
}

export default App
