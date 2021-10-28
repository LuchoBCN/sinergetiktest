import React from 'react'
import "../css/output.css"

export default function OutputEspai(props) {
    return (
        <div>
            <div className="output-container">

            <div>{props.text}</div>
            <div className={"circle-output " + (props.color)}></div>

            </div>
        </div>
    )
}
