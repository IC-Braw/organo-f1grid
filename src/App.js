import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Red Bull Racing',
      corPrimaria: '#121f45',
      corSecundaria: '#fbcca5',
    },
    {
      nome: 'Mercedes',
      corPrimaria: '#00A19C',
      corSecundaria: '#bce7eb',
    },
    {
      nome: 'Ferrari',
      corPrimaria: '#a6051a',
      corSecundaria: '#fff79d',
    },
    {
      nome: 'Alpine',
      corPrimaria: '#0090FF',
      corSecundaria: '#95ceff'
    },
    {
      nome: 'Aston Martin',
      corPrimaria: '#006F62',
      corSecundaria: '#a4ffd7',
    },
    {
      nome: 'AlphaTauri',
      corPrimaria: '#063262',
      corSecundaria: '#bbd9fb',
    },
    {
      nome: 'McLaren',
      corPrimaria: '#FF8000',
      corSecundaria: '#94defd',
    },
    {
      nome: 'Haas F1 Team',
      corPrimaria: '#111111',
      corSecundaria: '#aeaeae',
    },    
    {
      nome: 'Alfa Romeo',
      corPrimaria: '#a50f2d',
      corSecundaria: '#004e62',
    },
    {
      nome: 'Williams',
      corPrimaria: '#041e42',
      corSecundaria: '#00b1f4',
    },
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className='App'>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape></Rodape>
    </div>
  );
}

export default App;
