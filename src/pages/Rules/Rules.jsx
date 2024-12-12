import Button from "../../components/Button/Button.jsx"
import { useNavigate } from "react-router-dom";
import "./Rules.css"

function Rules() {
    const navigate = useNavigate();

    return (
        <div className="rules-wrapper">
            <div className="rules-container">
                <h1 className="text-center">Reglas de juego</h1>

                <div className="rules-box">
                    <div className="rules-text">
                        <h3>¿De qué se trata?</h3>
                        <p>MemoBird es un juego de memoria donde debes emparejar aves para ganar
                            puntos. Puedes jugar solo o con un amigo.</p>
                        <h3>Modos de juego</h3>
                        <ul>
                            <li>Un jugador: Encuentra todas las parejas en el menor tiempo posible.</li>
                            <li>Dos jugadores: Turna con tu oponente para descubrir parejas y competir por el puntaje más
                                alto.
                            </li>
                        </ul>

                        <h3>Cómo jugar</h3>
                        <ul>
                            <li>Selecciona dos cartas por turno:</li>
                            <ul>
                                <li>Pareja correcta: Las cartas se quedan volteadas y ganas puntos.</li>
                                <li>Pareja incorrecta: Las cartas se voltean de nuevo.</li>
                            </ul>
                            <li>Un jugador: Acumula puntos y combos por parejas consecutivas sin fallar.</li>
                            <li>Dos jugadores: El turno pasa al otro jugador si fallas.</li>
                        </ul>

                        <h3>Puntaje</h3>
                        <ul>
                            <li>Cada pareja correcta vale 100 puntos.</li>
                            <li>Obtienes 50 puntos extra por combo al emparejar correctamente varias veces seguidas sin
                                fallar.
                            </li>
                        </ul>

                        <h3>Final del juego</h3>
                        <ul>
                            <li>El juego termina al descubrir todas las parejas.</li>
                            <li>En modo de dos jugadores, gana quien tenga más puntos. Si hay empate, ambos ganan.</li>
                        </ul>
                        <h4 className="text-center">¡Pon a prueba tu memoria y diviértete con MemoBird!</h4>
                    </div>
                    <Button text={"Volver al inicio"} onClick={() => navigate('/')} />
                </div>


            </div>
        </div>
    )
}

export default Rules;
