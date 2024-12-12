import Button from "../../components/Button/Button.jsx"
import { useNavigate } from "react-router-dom";
import NotFoundImage from "../../assets/images/404-not-found-bird.png"
import "./NotFound.css"

function NotFound () {
    const navigate = useNavigate();

    return (
        <div className="error-container">
            <h1>Página no encontrada</h1>
            <img src={NotFoundImage} alt="error-404" className="not-found-image" />
            <Button text={"Volver al inicio"} onClick={() => navigate('/')} />
        </div>
    );
}

export default NotFound;
