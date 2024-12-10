import Button from "../components/Button/Button"
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import {useState} from "react";

function Home() {
    const navigate = useNavigate();

    const [difficultyValue, setDifficultyValue] = useState('4x4');

    const difficulties = [
        { name: '4x4', value: '4x4' },
        { name: '6x4', value: '6x4' },
        { name: '6x6', value: '6x6' },
    ];

    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <h1>~MemoBird~</h1>
                <p>Un juego de memoria con aves</p>
            </div>
            <div className='main-menu'>
                <div className="d-flex flex-column m-3">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <p className="m-0">Dificultad</p>
                        <ButtonGroup>
                            {difficulties.map((difficulty, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    name="radio"
                                    value={difficulty.value}
                                    checked={difficultyValue === difficulty.value}
                                    onChange={(e) => setDifficultyValue(e.currentTarget.value)}
                                >
                                    {difficulty.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                </div>
                <div className="main-menu-buttons">
                    <Button text={"Comenzar partida"} onClick={() => navigate(`/game/${difficultyValue}`)}/>
                    <Button text={"Reglas de Juego"} onClick={() => navigate('/rules')}/>
                </div>
            </div>
        </>
    );
}

export default Home;
