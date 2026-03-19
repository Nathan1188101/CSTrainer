/*
    will do the routing in here and import it into the main app.jsx file
    for better organization 
*/

import Home from '../../pages/home.jsx'
import Signup from '../../pages/signup.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" // make sure to have this for routing to work 

function Routing() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/signup" element={< Signup />} />
                </Routes>
            </Router>
        </>
    )
}

export default Routing