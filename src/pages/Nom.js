import React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'
import nomVignette from '../img/nom-vignette.png'

export default function Nom() {
    return (
        <div className="question-container">
            <img className="img-vignette" src={nomVignette}/>
           <div className ="question-text"><h1>Registrar un nom o alias per l'análisis</h1></div>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="Nom"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button className="input-button">
                Registrar
                </Button>
            </InputGroup>
        </div>
    )
}
