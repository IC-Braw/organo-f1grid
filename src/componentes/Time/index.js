import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {

    return (
        colaboradores.length > 0 && <section className='time' style={{backgroundColor: time.corSecundaria}}>
            <input type='color' onChange={evento => mudarCor(evento.target.value, time.id)} value={time.corSecundaria} className='input-color'/>
            <h3 style={{borderColor: time.corPrimaria}}>{time.nome}</h3>
            <div className='colaboradores'>
            {colaboradores.map((colaborador, indice) => {
            return (
                <Colaborador 
                key={indice} 
                colaborador={colaborador} 
                corDeFundo={time.corPrimaria} 
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
                />
                );
            })}
            </div>
        </section>
    )
}

export default Time