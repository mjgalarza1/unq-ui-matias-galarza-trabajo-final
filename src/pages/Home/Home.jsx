import Button from "../../components/Button/Button.jsx";
import { Button as BootstrapButton } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import DifficultyOptions from "../../components/DifficultyOptions/DifficultyOptions.jsx";
import "./Home.css"

function Home() {
    const navigate = useNavigate();

    const [difficultyValue, setDifficultyValue] = useState('4x4');

    const handleDifficulty = (optionSelected) => {
        setDifficultyValue(optionSelected);
    };

    return (
        <>
            <div className="main-menu-container">

                <div className="game-title">
                    <h1>~MemoBird~</h1>
                    <p>Un juego de memoria con aves</p>
                </div>

                <div className="game-options-wrapper">
                    <div className="game-option">
                        <h5 className="m-0">Dificultad</h5>
                        <DifficultyOptions currentDifficultyValue={difficultyValue}
                                           handleDifficulty={handleDifficulty}/>
                    </div>

                    <div className="game-option">
                        <h5 className="m-0">Jugadores</h5>
                        <Form.Select>
                            <option selected={true} value="1">Un jugador</option>
                            <option value="2">Dos jugadores</option>
                        </Form.Select>
                    </div>

                    <div className="main-menu-buttons">
                        <Button text={"Empezar partida"} onClick={() => navigate(`/game/${difficultyValue}`)}/>
                    </div>
                </div>

            </div>
            <div className="text-end">
                <BootstrapButton variant="link" onClick={() => navigate('/rules')}>Reglas de Juego</BootstrapButton>
            </div>
        </>
    );
}

export default Home;
