import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores, aoDeletar, mudarCor1, mudarCor2, aoFavoritar}) => {

    return (
        colaboradores.length > 0 && <section className='time' style={{backgroundColor: time.corSecundaria}}>
            <div className='input-color'>
            <input type='color' onChange={evento => mudarCor2(evento.target.value, time.id)} value={time.corSecundaria} />
            <input type='color' onChange={evento => mudarCor1(evento.target.value, time.id)} value={time.corPrimaria} />
            </div>
            <h3 style={{borderColor: time.corPrimaria}}>{time.nome}</h3>
            <div className='colaboradores'>
            {colaboradores.map((colaborador, indice) => {
            return (
                <Colaborador 
                key={indice} 
                colaborador={colaborador} 
                corPrimaria={time.corPrimaria}
                corSecundaria={time.corSecundaria} 
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