import React from 'react'
import imageLanding from '../img/town.png'


export default function Landing() {
    return (
        <>
        <div className="question-container">
            <div className="question-text">Hola benvingut a <h1>Sinergetik</h1></div>
            <div className="explanation-text">
                <h2>Amb aquest exercici treballarem sobre <span className="hightlight">l’estat de confort a l'escola o a casa nostra</span>.
                    Fem d’arquitectes!</h2></div>
        </div>
        <div className="main-image-container">
            <img src={imageLanding}></img>
        </div>
        </>
    )
}
