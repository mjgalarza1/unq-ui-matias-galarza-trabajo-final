import Button from "../components/Button/Button"
import { useNavigate } from 'react-router-dom';
import {useState} from "react";
import DifficultyOptions from "../components/DifficultyOptions.jsx";

function Home() {
    const navigate = useNavigate();

    const [difficultyValue, setDifficultyValue] = useState('4x4');

    const handleDifficulty = (optionSelected) => {
        setDifficultyValue(optionSelected);
    };

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
                        <DifficultyOptions currentDifficultyValue={difficultyValue} handleDifficulty={handleDifficulty} />
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
