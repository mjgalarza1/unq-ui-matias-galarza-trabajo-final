import Board from "../../components/Board/Board.jsx";
import Button from "../../components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import "./Game.css"

function Game() {
    const navigate = useNavigate();

    return (
        <>
            <div className="game-board-container">
                <h1 className="game-board-title">¡Descubre las aves!</h1>
                <Board />
                <Button text='Volver al menú' onClick={() => navigate('/home')} />
            </div>
        </>
    );
}

export default Game;
