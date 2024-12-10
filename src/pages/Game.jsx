import Board from "../components/Board/Board.jsx";
import Button from "../components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";

function Game() {
    const navigate = useNavigate();

    return (
        <>
            <div style={{textAlign: "center", display: "flex", flexDirection: "column", gap:"2em"}}>
                <h1 style={{margin: 0}}>¡Descubre las aves!</h1>
                <Board />
                <Button text='Volver al menú' onClick={() => navigate('/home')} />
            </div>
        </>
    );
}

export default Game;
