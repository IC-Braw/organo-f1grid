import { BiMinusCircle } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Colaborador.css';

const Colaborador = ({colaborador, corPrimaria, aoDeletar, aoFavoritar}) => {

    function favoritar() {
        aoFavoritar (colaborador.id);
    }

    const propsFavorito = {
        size:25, 
        onClick: favoritar
    }

    return (<div className='colaborador'>
        <BiMinusCircle 
            size={30}
            className='deletar' 
            onClick={() => aoDeletar(colaborador.id)}/>
        <div className='cabecalho' style={{backgroundColor:corPrimaria}}>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className="favoritar">
                {colaborador.favorito 
                ? <AiFillHeart {... propsFavorito} color="#ff0000"/> 
                : <AiOutlineHeart {... propsFavorito}/>}
            </div>
        </div>
    </div>)
}

export default Colaborador