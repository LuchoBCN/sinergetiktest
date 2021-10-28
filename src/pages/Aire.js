import React from 'react'
import MesureAire from '../components/MesureAire'
import { Button } from 'react-bootstrap'
import iconCodos from "../img/co2.png"

export default function Aire() {
    return (
        <>
        <h1>Anem a mesurar la qualitat de l'aire <img className="title-icon" src={iconCodos} /></h1>
        <div className="mesure-grid-container">
            <MesureAire text="Cuina" ></MesureAire>
            <MesureAire text="Menjador" ></MesureAire>
            <MesureAire text="Passadís" ></MesureAire>
            <MesureAire text="Jardí" ></MesureAire>
            <MesureAire text="Escales" ></MesureAire>
            <MesureAire text="Porteria" ></MesureAire>
            <MesureAire text="Aula" ></MesureAire>
            <MesureAire text="Gymnàs" ></MesureAire>
        </div>
        <Button className="general-button" variant="primary" type="submit">Guardar</Button>

        </>
    )
}
