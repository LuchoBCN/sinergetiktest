import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function MesureAire(props) {
    const [rangeValue, setRangeValue] = useState(0);
    return (
        <>
                <div className="mesure-container">
                    <h3>{props.text}</h3>
                    <div className="mesure-result-container"><strong>{rangeValue}</strong><small> ppm</small></div>
                    <Form>
                        <Form.Label>Qualitat de l'aire</Form.Label>
                        <Form.Range 
                            id="1" 
                            min="400" 
                            max="1000" 
                            step="50"
                            onChange={(e) => {
                                setRangeValue(e.target.value);
                            }}
                        />
                    </Form>
                </div>
        </>
    )
}
