import { useState } from "react";

const Titulo = ({ tituloNuevo }) => {
    const [texto, setTexto] = useState("Hello my friend!");

    const hacerClick = () => {
        setTexto(`Hello ${tituloNuevo} (from changed state)!`);
    };

    return (
        <section className="container text-center">
            <h1>
                <strong>{texto}</strong>
            </h1>
            <button className="btn btn-info" onClick={hacerClick}>
                Click here!
            </button>
        </section>
    );
};

export default Titulo;
