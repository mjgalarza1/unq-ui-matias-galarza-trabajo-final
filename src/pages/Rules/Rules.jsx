import Button from "../../components/Button/Button.jsx"
import { useNavigate } from "react-router-dom";

function Rules() {
    const navigate = useNavigate();

    return (
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", width: "70vw", textAlign: "center"}}>
                <h1>Reglas de juego</h1>
                <p>El juego consiste en una grilla o cuadrícula de tamaño variable, en la cual se esconden pares de objetos.
                    Los jugadores deben ir descubriendo las celdas de a una e ir recordando dónde está cada pieza del par, para así reunirlos y sumar puntos.
                    El objetivo es lograr reunir la mayor cantidad de pares.
                    El jugador que reúne la mayor cantidad de pares es el ganador.
                    Concluye cuando todos los pares de la grilla son formados.</p>
                <Button text={"Volver"} onClick={() => navigate('/')} />
            </div>
        </>
    )
}

export default Rules;