import React from 'react'
import OutputEspai from '../components/OutputEspai'

export default function Semaforperespais() {
    return (
        <div>
            <h1>Semàfor per cada espai</h1>
            <div className="outputs-all-container">
                <OutputEspai text="Cuina" color="red-output"></OutputEspai>
                <OutputEspai text="Menjador" color="yellow-output"></OutputEspai>
                <OutputEspai text="Passadís" color="green-output"></OutputEspai>
                <OutputEspai text="Jardí" color="green-output"></OutputEspai>
                <OutputEspai text="Escales" color="yellow-output"></OutputEspai>
                <OutputEspai text="Porteria" color="green-output"></OutputEspai>
                <OutputEspai text="Aula" color="green-output"></OutputEspai>
                <OutputEspai text="Gymnàs" color="red-output"></OutputEspai>
            </div>
        </div>
    )
}
