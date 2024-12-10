import Button from "../../components/Button/Button.jsx"
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
                        <p className="text-end mb-0">(aqui iría la seleccion de cantidad de jugadores)</p>
                    </div>

                    <div className="main-menu-buttons">
                        <Button text={"Comenzar partida"} onClick={() => navigate(`/game/${difficultyValue}`)}/>
                        <Button text={"Reglas de Juego"} onClick={() => navigate('/rules')}/>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Home;
