import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';

const Formulario = (props) => {
    const times = [
        'Red Bull Racing',
        'Mercedes',
        'Ferrari',
        'Alpine',
        'Aston Martin',
        'AlphaTauri',
        'McLaren',
        'Haas F1 Team',
        'Alfa Romeo',
        'Williams'
    ]

    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTime] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })
        setNome ('')
        setCargo ('')
        setImagem ('')
        setTime ('')
        console.log(nome, cargo, imagem, time)
    }
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" p
                placeholder="Digite seu nome"
                valor = {nome}
                aoAlterado = {valor=>setNome(valor)} 
                />
                <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor = {cargo}
                aoAlterado = {valor=>setCargo(valor)}
                />
                <CampoTexto 
                label="Imagem"
                placeholder="Digite o endereço da imagem"
                valor = {imagem}
                aoAlterado = {valor=>setImagem(valor)}
                 />
                <ListaSuspensa obrigatorio={true} 
                label="Time" 
                itens={times} 
                valor={time} 
                aoAlterado={valor=>setTime(valor)} />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario