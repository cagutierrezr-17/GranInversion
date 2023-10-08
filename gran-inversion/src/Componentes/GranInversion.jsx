import "./GranInversion.css"

const PersonCard = (props) => {
    return (
        <div className="personCard">
            <h1>{props.apellido}, {props.nombre}</h1>
            <p>Age: {props.edad}</p>
            <p>Hair Color: {props.colorCabello}</p>
        </div>
    );
}

export default PersonCard;