import React, { useState } from 'react'
import FormSelect from './FormSelectEspais'
import ListArea from './ListArea';
import '../App.css';

export default function EspaiSelector(props) {
    const [input,setInput] = useState("");
    const [espais,setEspais] = useState([]);
    return (
        <div>
            <div className="add-container">
                <FormSelect text={props.text} input={input} setInput={setInput} espais={espais} setEspais={setEspais}/>
                <ListArea espais={espais} setEspais={setEspais}/>     
            </div>
        </div>
    )
}
