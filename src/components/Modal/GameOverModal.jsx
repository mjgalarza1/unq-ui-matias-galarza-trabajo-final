import "./GameOverModal.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate, useParams} from "react-router-dom";

function GameOverModal({ isVisible, onReplay, player1Score, player2Score }) {
    const navigate = useNavigate()
    const {players} = useParams();
    if (!isVisible) return null;

    const winner = player1Score > player2Score ? "Jugador 1" : player2Score > player1Score ? "Jugador 2" : "Nadie, es un empate";
    const winnerScore = player1Score > player2Score ? player1Score : player2Score;

    return (
        <Modal
            show={isVisible}
            size="sm"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton={false}>
                <Modal.Title id="contained-modal-title-vcenter">
                    {players === "1"
                        ? <div>¡Has ganado la partida!</div>
                        : <div>
                            <h5>El ganador es:</h5>
                            <h2>¡{winner}!</h2>
                        </div>
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {players === "1"
                    ? <p>Tu puntaje es:</p>
                    : <p>El puntaje final fue:</p>}
                <h1>¡{winnerScore}!</h1>
            </Modal.Body>
            <Modal.Footer>
                <div className="modal-footer-buttons">
                    <Button onClick={onReplay}>
                        {players === "1"
                            ? <div>Siguiente partida</div>
                            : <div>Reiniciar partida</div>}
                    </Button>
                    <Button onClick={() => navigate('/')}>Volver al menú principal</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default GameOverModal;
