import React from 'react'
import iconTemperatura from "../img/temperatura-alta.png"
import { Button } from 'react-bootstrap'
import MesureTemperatura from "../components/MesureTemperatura"

export default function Temperatura() {
    return (
        <>
            <h1>Anem a mesurar la temperatura <img className="title-icon" src={iconTemperatura} /></h1>
            <div className="mesure-grid-container">
                <MesureTemperatura text="Cuina" ></MesureTemperatura>
                <MesureTemperatura text="Menjador" ></MesureTemperatura>
                <MesureTemperatura text="Passadís" ></MesureTemperatura>
                <MesureTemperatura text="Jardí" ></MesureTemperatura>
                <MesureTemperatura text="Escales" ></MesureTemperatura>
                <MesureTemperatura text="Porteria" ></MesureTemperatura>
                <MesureTemperatura text="Aula" ></MesureTemperatura>
                <MesureTemperatura text="Gymnàs" ></MesureTemperatura>
            </div>
            <Button className="general-button" variant="primary" type="submit">Guardar</Button>
        </>
    )
}
