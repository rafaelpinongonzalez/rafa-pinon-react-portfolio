import React from "react";
import { Link } from "react-router-dom";

export default function() {
    return (
        <div>
            <h2>No pudimos encontrar esa pagina</h2>
            <Link to="/">regresar a la pagina principal</Link>
        </div>
    );
}