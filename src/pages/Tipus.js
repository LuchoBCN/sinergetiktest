import React, { useContext } from 'react'
import '../css/button.css';
import '../css/all.min.css';


export default function Tipus() {
     return (
        <div>
            <div className ="question-text"><h1>Es tracta d'un centre educatiu o d'un habitatge?</h1></div>
            <div className="button-selector">
                <a className="button" href="#" role="button">
                    <span>Centre</span>
                    <div className="icon">
                        {/* <i class="fa fa-remove"></i> */}
                        <i className="fa fa-school"></i>
                    </div>
                </a>
            </div>
            <div className="button-selector">
                <a className="button button-selector-habitatge" href="#" role="button">
                    <span>Habitatge</span>
                    <div className="icon">
                        {/* <i class="fa fa-remove"></i> */}
                        <i className="fa fa-home"></i>
                    </div>
                </a>
            </div>

        </div>
    )
}
 