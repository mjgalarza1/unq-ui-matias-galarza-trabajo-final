import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/Home/Home.jsx";
import Game from "./pages/Game/Game.jsx";
import Rules from "./pages/Rules/Rules.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:difficulty" element={<Game />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>

        </Router>
    )
}

export default App;
