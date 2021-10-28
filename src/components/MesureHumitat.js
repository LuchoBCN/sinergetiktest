import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function MesureHumitat(props) {
    const [rangeValue, setRangeValue] = useState(0);
    return (
        <>
                <div className="mesure-container">
                    <h3>{props.text}</h3>
                    <div className="mesure-result-container"><strong>{rangeValue}</strong><small> %</small></div>
                    <Form>
                        <Form.Label>Humitat</Form.Label>
                        <Form.Range 
                            id="1" 
                            min="30" 
                            max="70" 
                            onChange={(e) => {
                                setRangeValue(e.target.value);
                            }}
                        />
                    </Form>
                </div>
        </>
    )
}
