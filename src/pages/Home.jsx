import Button from "../components/Button/Button"
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <div className="d-flex flex-column align-items-center mb-2">
                <h1>~MemoBird~</h1>
                <p>Un juego de memoria con aves</p>
            </div>
            <div className="main-menu-buttons">
                <Button text={"Un Jugador"} onClick={() => navigate('/game')}/>
                {/*<Button text={"Two Players"} onClick={() => navigate("/twoplayers")}/>*/}
                <Button text={"Reglas de Juego"} onClick={() => navigate('/rules')}/>
            </div>
        </>
    )
}

export default Home;
