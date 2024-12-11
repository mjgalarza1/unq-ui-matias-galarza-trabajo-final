import { Button as BootstrapButton } from "react-bootstrap";
import "./Button.css";

function Button({text, onClick}) {
    return <BootstrapButton type="button" className="button" onClick={onClick}>{text}</BootstrapButton>
}

export default Button;
