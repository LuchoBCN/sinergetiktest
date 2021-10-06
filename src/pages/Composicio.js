import React from 'react'
import { Dropdown } from 'react-bootstrap'
import '../App.css';

export default function Composicio() {
    return (
        <div>
            <h1>Añade los espacios que componen tu hogar</h1>
            <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
                Espais interiors de l'edifici/recinte
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Dormitori</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Cuina</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Passadís</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Escales</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#/action-3">Aula</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Menjador</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cuina</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Passadís</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Escales</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Porteria</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Gymnàs</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Laboratori</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Aula informàtica</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Aula música</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Aula plàstica</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Lavabos</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Consergeria</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Biblioteca</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Aula polivalent</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Sala professores</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Auditori</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Auditori</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Oficines</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
                Espais exteriors de l'edifici/recinte
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Pati</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Jardí</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Accés</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Terrat</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Terrassa</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
                Espais fora del centre (interiors) 
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Biblioteca</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Centre civic</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Museu</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Local</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Poliesportiu</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Centre educatiu</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Casal d'avis</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Equipament municipal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Equipament privat</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
            <Dropdown.Toggle variant="info" id="dropdown-basic">
                Espais fora del centre (exteriors)
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Plaça</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Carrer</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Bosc</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Parc</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Platja</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Camp</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Equipament municipal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Equipament privat</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
