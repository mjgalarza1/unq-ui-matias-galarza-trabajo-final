import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";
import Rules from "./pages/Rules.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game" element={<Game />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

        </Router>
    )
}

export default App;
