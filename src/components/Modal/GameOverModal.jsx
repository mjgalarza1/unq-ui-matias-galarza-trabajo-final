import React from "react";
import "./GameOverModal.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";

function GameOverModal({ isVisible, onReplay, score }) {
    const navigate = useNavigate()
    if (!isVisible) return null;

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
                    ¡Has ganado la partida!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Tu puntaje es:</p>
                <h1>¡{score}!</h1>
            </Modal.Body>
            <Modal.Footer>
                <div className="modal-footer-buttons">
                    <Button onClick={onReplay}>Siguiente partida</Button>
                    <Button onClick={() => navigate('/home')}>Volver al menú principal</Button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default GameOverModal;
