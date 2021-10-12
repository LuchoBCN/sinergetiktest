import '../App.css';
import EspaiSelector from '../components/EspaiSelector';

export default function Composicio() {

    return (
        <div className="background-smoke">
            <div className ="question-text"><h1>Per quins espais està composat el objecte de l’anàlisis?</h1></div>
            <div className="espais-selector-container">
                <EspaiSelector text="Espais interiors de l'edifici"/>
                <EspaiSelector text="Espais exteriors de l'edifici"/>
                <EspaiSelector text="Espais fora del centre (interiors)"/>
                <EspaiSelector text="Espais fora del centre (exteriors)"/>
            </div>
        </div>
    )
}
