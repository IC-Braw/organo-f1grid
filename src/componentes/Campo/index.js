import './Campo.css';
import '../Formulario'

const Campo = ({type = 'text', label, placeholder, valor, aoAlterado, obrigatorio=false}) =>  {
    const placeholderModificada = `${placeholder}...`;

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
        console.log (valor)
    } 
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificada} />
        </div>
    );
}

export default Campo;