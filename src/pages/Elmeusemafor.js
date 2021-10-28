import React from 'react'
import '../css/semafor.css'
import imgAnalisis from "../img/analisis.png"


export default function Elmeusemafor() {
    return (
        <div>
            <h1>Com estem? <img className="title-icon" src={imgAnalisis} /></h1>
            <div className="semafors-container">
                <div className="semafor-frame general">
                    <h4>Semàfor general</h4>
                    <div className="circle-frame-big">
                        <div className="circle-border-big-grey"><div className="circle big grey"></div></div>
                        <div className="circle-border-big-grey"><div className="circle big yellow "></div></div>
                        <div className="circle-border-big-grey"><div className="circle big grey"></div></div>
                    </div>
                </div>
                <div className="espais-semafor-container">
                    <div className="semafor-frame">
                        <h5>Interior de l'edifici</h5>
                        <div className="circle-frame">
                            <div className="circle-border"><div className="circle small green "></div></div>
                            <div className="circle-border"><div className="circle small grey"></div></div>
                            <div className="circle-border"><div className="circle small grey"></div></div>
                        </div>
                    </div>
                    <div className="semafor-frame">
                        <h5>Exterior de l'edifici</h5>
                        <div className="circle-frame">
                            <div className="circle-border"><div className="circle small green "></div></div>
                            <div className="circle-border"><div className="circle small grey"></div></div>
                            <div className="circle-border"><div className="circle small grey"></div></div>
                        </div>
                    </div>
                    <div className="semafor-frame">
                        <h5>Fora del centre (interior)</h5>
                        <div className="circle-frame">
                            <div className="circle-border"><div className="circle small grey"></div></div>
                            <div className="circle-border"><div className="circle small grey"></div></div>
                            <div className="circle-border"><div className="circle small red "></div></div>
                        </div>
                    </div>
                    <div className="semafor-frame">
                        <h5>Fora del centre (exterior)</h5>
                        <div className="circle-frame">
                            <div className="circle-border"><div className="circle small grey"></div></div>
                            <div className="circle-border"><div className="circle small yellow "></div></div>
                            <div className="circle-border"><div className="circle small grey"></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
