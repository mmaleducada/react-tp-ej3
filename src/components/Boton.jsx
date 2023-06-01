import { useState } from "react";

const Boton = () => {
    const [texto, setTexto] = useState("(from changed state)")
    return (
        <>
            <button className="btn btn-info" onClick={() => setTexto (texto)}>Click here!</button>
        </>
    );
};

export default Boton;