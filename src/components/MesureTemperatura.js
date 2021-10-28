import React, { useState } from 'react'
import { Form } from "react-bootstrap"


export default function MesureTemperatura(props) {
    const [rangeValue, setRangeValue] = useState(0);
    return (
        <>
                <div className="mesure-container">
                    <h3>{props.text}</h3>
                    <div className="mesure-result-container"><strong>{rangeValue}</strong><small> °C</small></div>
                    <Form>
                        <Form.Label>Temperatura</Form.Label>
                        <Form.Range 
                            id="1" 
                            min="0" 
                            max="30" 
                            step="0.5"
                            onChange={(e) => {
                                setRangeValue(e.target.value);
                            }}
                        />
                    </Form>
                </div>
        </>
    )
}
