import React from 'react'
import { Form, Button } from 'react-bootstrap'

export default function Humitat() {
    return (
        <div>
            <h1>Anem a mesurar la humedat</h1>
            <div className="mesure-grid-container">
                <div className="mesure-container">
                    <h3>Cuina</h3>
                    <Form>
                        <Form.Label>Temperatura</Form.Label>
                        <Form.Range min="0" max="100" step="0.01"/>
                    </Form>
                    <Form>
                        <Form.Label>Humitat</Form.Label>
                        <Form.Range />
                    </Form>
                    <Form>
                        <Form.Label>Soroll</Form.Label>
                        <Form.Range />
                    </Form>
                    <Button variant="primary" type="submit">Guardar</Button>
                </div>

            </div>
        </div>
    )
}
