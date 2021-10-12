import React from 'react'
import Espai from './Espai'

export default function ListArea({espais}) {
    return (
        <div>
            <div className="list-container">
                <div className="list-title">Seleccionats</div>
                <div className="items-container">
                    {espais.map(espai => (
                        <Espai text={espai.text}/>
                        ))}
                </div>
            </div>
        </div>
    )
}
