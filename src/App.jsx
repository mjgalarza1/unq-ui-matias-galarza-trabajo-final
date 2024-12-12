import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from "./pages/Home/Home.jsx";
import Game from "./pages/Game/Game.jsx";
import Rules from "./pages/Rules/Rules.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/game/:difficulty/:players" element={<Game />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>

        </Router>
    )
}

export default App;
