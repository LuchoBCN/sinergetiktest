import React from 'react'
import MesureHumitat from '../components/MesureHumitat'
import { Button } from 'react-bootstrap'
import imgHumitat from "../img/humedad.png"


export default function Humitat() {
    return (
        <>
        <h1>Anem a mesurar la humitat<img className="title-icon" src={imgHumitat} /></h1>
        <div className="mesure-grid-container">
            <MesureHumitat text="Cuina" ></MesureHumitat>
            <MesureHumitat text="Menjador" ></MesureHumitat>
            <MesureHumitat text="Passadís" ></MesureHumitat>
            <MesureHumitat text="Jardí" ></MesureHumitat>
            <MesureHumitat text="Escales" ></MesureHumitat>
            <MesureHumitat text="Porteria" ></MesureHumitat>
            <MesureHumitat text="Aula" ></MesureHumitat>
            <MesureHumitat text="Gymnàs" ></MesureHumitat>
        </div>
        <Button className="general-button" variant="primary" type="submit">Guardar</Button>

        </>
    )
}
