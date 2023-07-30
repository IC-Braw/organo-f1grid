import { useState } from "react";
import Botao from "../Botao";
import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

    const [nome, setNome] = useState ('')
    const [cargo, setCargo] = useState ('')
    const [imagem, setImagem] = useState ('')
    const [time, setTime] = useState ('')
    const [nomeTime, setNomeTime] = useState ('')
    const [corTime1, setCorTime1] = useState ('')
    const [corTime2, setCorTime2] = useState ('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoCadastrar ({
            id:uuidv4(),
            nome,
            cargo,
            imagem,
            time
        })
        console.log(nome, cargo, imagem, time)
    }
    
    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSalvar}>
                <h2>Preencha os dados</h2>
                <Campo 
                obrigatorio 
                label="Nome" p
                placeholder="Digite seu nome"
                valor = {nome}
                aoAlterado = {valor=>setNome(valor)} 
                />
                <Campo 
                obrigatorio 
                label="Cargo" 
                placeholder="Digite seu cargo"
                valor = {cargo}
                aoAlterado = {valor=>setCargo(valor)}
                />
                <Campo 
                label="Imagem"
                placeholder="Digite o endereço da imagem"
                valor = {imagem}
                aoAlterado = {valor=>setImagem(valor)}
                 />
                <ListaSuspensa obrigatorio 
                label="Time" 
                itens={times} 
                valor={time} 
                aoAlterado={valor=>setTime(valor)} />
                <Botao texto='Criar Card'/>
            </form>
            <form className="formulario" onSubmit={(evento) => {evento.preventDefault() 
                cadastrarTime({nome: nomeTime, corPrimaria: corTime1, corSecundaria:corTime2, id:uuidv4()})}}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo 
                obrigatorio 
                label="Nome"
                placeholder="Digite o nome do time"
                valor = {nomeTime}
                aoAlterado = {valor=>setNomeTime(valor)} 
                />
                <div className="formulario form-color">
                <Campo 
                obrigatorio 
                type="color"
                label="Cor para os Cards" 
                placeholder="Digite a cor do time"
                valor = {corTime1}
                aoAlterado = {valor=>setCorTime1(valor)}
                />
                <Campo 
                obrigatorio 
                type="color"
                label="Cor de Fundo" 
                placeholder="Digite a cor do time"
                valor = {corTime2}
                aoAlterado = {valor=>setCorTime2(valor)}
                />
                </div>
                <Botao texto='Criar um novo time' />
            </form>
        </section>
    )
}

export default Formulario