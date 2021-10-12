import '../App.css';
import { Form} from 'react-bootstrap';
import cuinaIcon from '../img/cocina.png'
import jardinIcon from '../img/jardin.png'
import deportivoIcon from '../img/campo-deportivo.png'
import bibliotecaIcon from '../img/biblioteca.png'


export default function FormSelectEspais({ text, input, setInput, espais,setEspais }) {
    const handleChange = (e) => {
        setInput(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setEspais([
            ...espais,
            { text: input, completed: false, id: Math.random() * 1000}
        ]);
    };
    return (
        <div>
                { text === "Espais interiors de l'edifici" &&
                    <Form className="form-container" onSubmit={handleSubmit}>
                        <img className="icon-select" src={cuinaIcon}/>
                        <label>
                        <p>{text}</p> 
                        </label>
                        <div className="select-container">
                            <Form.Select  aria-label="Default select example" value={input} onChange={handleChange}>
                                <option value="">Llista d'espais</option>
                                <option value="Dormitori">Dormitori</option>
                                <option value="Cuina">Cuina</option>
                                <option value="Passadís">Passadís</option>
                                <option value="Escales">Escales</option>
                                <option value="Aula">Aula</option>
                                <option value="Menjador">Menjador</option>
                                <option value="Cuina">Cuina</option>
                                <option value="Passadís">Passadís</option>
                                <option value="Escales">Escales</option>
                                <option value="Porteria">Porteria</option>
                                <option value="Gymnàs">Gymnàs</option>
                            </Form.Select>
                            <input className="add-input" onClick={handleSubmit} type="submit" value="+" />
                        </div>
                    </Form>
                }
                { text === "Espais exteriors de l'edifici" &&
                    <Form className="form-container" onSubmit={handleSubmit}>
                        <img className="icon-select" src={jardinIcon}/>
                        <label>
                        <p>{text}</p> 
                        </label>
                        <div className="select-container">
                            <Form.Select className="select-style" aria-label="Default select example" value={input} onChange={handleChange}>
                                <option value="">Llista d'espais</option>
                                <option value="Plaça">Pati</option>
                                <option value="Jardí">Jardí</option>
                                <option value="Accés">Accés</option>
                                <option value="Terrat">Terrat</option>
                                <option value="Terrassa">Terrassa</option>
                            </Form.Select>
                            <input className="add-input" onClick={handleSubmit} type="submit" value="+" />
                        </div>
                    </Form>                } 
                { text === "Espais fora del centre (interiors)" &&
                    <Form className="form-container" onSubmit={handleSubmit}>
                        <img className="icon-select" src={bibliotecaIcon}/>
                        <label>
                        <p>{text}</p> 
                        </label>
                        <div className="select-container">
                            <Form.Select className="select-style" aria-label="Default select example" value={input} onChange={handleChange}>
                                <option value="">Llista d'espais</option>
                                <option value="Biblioteca">Biblioteca</option>
                                <option value="Centre civic">Centre civic</option>
                                <option value="Museu">Museu</option>
                                <option value="Local">Local</option>
                                <option value="Poliesportiu">Poliesportiu</option>
                                <option value="Centre educatiu">Centre educatiu</option>
                                <option value="Casal d'avis">Casal d'avis</option>
                                <option value="Equipament municipal">Equipament municipal</option>
                                <option value="Equipament privat">Equipament privat</option>
                            </Form.Select>
                            <input className="add-input" onClick={handleSubmit} type="submit" value="+" />
                        </div>
                    </Form>                 
                } 
                { text === "Espais fora del centre (exteriors)" &&
                    <Form className="form-container" onSubmit={handleSubmit}>
                        <img className="icon-select" src={deportivoIcon}/>
                        <label>
                        <p>{text}</p> 
                        </label>
                        <div className="select-container">
                            <Form.Select className="select-style" aria-label="Default select example" value={input} onChange={handleChange}>
                                <option value="">Llista d'espais</option>
                                <option value="Plaça">Plaça</option>
                                <option value="Carrer">Carrer</option>
                                <option value="Bosc">Bosc</option>
                                <option value="Parc">Parc</option>
                                <option value="Platja">Platja</option>
                                <option value="Camp">Camp</option>
                                <option value="Equipament municipal">Equipament municipal</option>
                                <option value="Equipament privat">Equipament privat</option>
                            </Form.Select>
                            <input className="add-input" onClick={handleSubmit} type="submit" value="+"/>
                        </div>
                    </Form>                 
                } 
        </div>
    )
}
