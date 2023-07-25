import { BiMinusCircle } from "react-icons/bi";
import './Colaborador.css';

const Colaborador = ({colaborador, corDeFundo, aoDeletar}) => {
    return (<div className='colaborador'>
        <BiMinusCircle 
            size={30}
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)}/>
        <div className='cabecalho' style={{backgroundColor:corDeFundo}}>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador