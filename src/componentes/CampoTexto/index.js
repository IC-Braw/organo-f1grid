import './CampoTexto.css';
import '../Formulario'
import { useState } from 'react';

function CampoTexto(props) {

    const placeholderModificada = `${props.placeholder}...`;

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
        console.log (props.valor)
    } 
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada} />
        </div>
    );
}

export default CampoTexto;