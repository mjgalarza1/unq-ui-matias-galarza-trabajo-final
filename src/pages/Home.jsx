import Button from "../components/Button/Button"
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Memotest</h1>
            <div className="main-menu-buttons">
                <Button text={"Un Jugador"} onClick={() => navigate('/game')}/>
                {/*<Button text={"Two Players"} onClick={() => navigate("/twoplayers")}/>*/}
                <Button text={"Reglas de Juego"} onClick={() => navigate('/rules')}/>
            </div>
        </>
    )
}

export default Home;
