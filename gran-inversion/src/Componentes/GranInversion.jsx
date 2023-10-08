import { useState } from "react";
import "./GranInversion.css"

const PersonCard = (props) => {

    let [edadState, setEdadState] = useState (props.edad);

    const clickEdad =() => {
        setEdadState (edadState += 1);
    }

    return (
        <div className="personCard">
            <h1>{props.apellido}, {props.nombre}</h1>
            <p>Age: {edadState}</p>
            <button onClick={clickEdad}>+ Edad</button>
            <p>Hair Color: {props.colorCabello}</p>
        </div>
    );
}

export default PersonCard;