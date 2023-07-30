import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState ([
    {
      id: uuidv4(),
      nome: 'Red Bull Racing',
      corPrimaria: '#121f45',
      corSecundaria: '#fbcca5',
    },
    {
      id: uuidv4(),
      nome: 'Mercedes',
      corPrimaria: '#00A19C',
      corSecundaria: '#bce7eb',
    },
    {
      id: uuidv4(),
      nome: 'Ferrari',
      corPrimaria: '#a6051a',
      corSecundaria: '#fff79d',
    },
    {
      id: uuidv4(),
      nome: 'Alpine',
      corPrimaria: '#0090FF',
      corSecundaria: '#95ceff'
    },
    {
      id: uuidv4(),
      nome: 'Aston Martin',
      corPrimaria: '#006F62',
      corSecundaria: '#a4ffd7',
    },
    {
      id: uuidv4(),
      nome: 'AlphaTauri',
      corPrimaria: '#063262',
      corSecundaria: '#bbd9fb',
    },
    {
      id: uuidv4(),
      nome: 'McLaren',
      corPrimaria: '#FF8000',
      corSecundaria: '#94defd',
    },
    {
      id: uuidv4(),
      nome: 'Haas F1 Team',
      corPrimaria: '#111111',
      corSecundaria: '#aeaeae',
    },    
    {
      id: uuidv4(),
      nome: 'Alfa Romeo',
      corPrimaria: '#a50f2d',
      corSecundaria: '#004e62',
    },
    {
      id: uuidv4(),
      nome: 'Williams',
      corPrimaria: '#041e42',
      corSecundaria: '#00b1f4',
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MAX VERSTAPPEN',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1024.medium.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'SERGIO PEREZ',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1024.medium.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CHRISTIAN HORNER',
      cargo: 'Chefe de Equipe',
      imagem: 'https://formulapedia.com/wp-content/uploads/2022/10/Christian-Horner-salary-net-worth-forbes-wealth-houses-cars-investments.webp',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ADRIAN NEWEY',
      cargo: 'Projetista',
      imagem: 'https://cdn-4.motorsport.com/images/amp/0RrVB9g0/s6/adrian-newey-1.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'RED BULL RB-19',
      cargo: 'Livery 2023',
      imagem: 'https://classic.exame.com/wp-content/uploads/2023/02/GettyImages-1246765746.jpg?quality=70&strip=info',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LEWIS HAMILTON',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1024.medium.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GEORGE RUSSELL',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/russell.jpg.img.1024.medium.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'TOTO WOLFF',
      cargo: 'Chefe de Equipe',
      imagem: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OC4LPPNFQRIPFF2EOXNXXIUWTU.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CHARLES LECLERC',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/leclerc.jpg.img.1024.medium.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CARLOS SAINZ',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/sainz.jpg.img.1024.medium.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'FRÉDÉRIC VASSEUR',
      cargo: 'Chefe de Equipe',
      imagem: 'https://cdn.racingnews365.com/_1800x945_crop_center-center_75_none/Vasseur-Ferrari.jpg?v=1676464397',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PIERRE GASLY',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/gasly.jpg.img.1024.medium.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ESTEBAN OCON',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/ocon.jpg.img.1024.medium.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'OTMAR SZAFNAUER',
      cargo: 'Chefe de Equipe',
      imagem: 'https://cdn.racingnews365.com/_1800x945_crop_center-center_75_none/otmar-szafnauer-alpine-aston-martin-racingnews365.jpg?v=1681203639',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'FERNANDO ALONSO',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/alonso.jpg.img.1024.medium.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LANCE STROLL',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/stroll.jpg.img.1024.medium.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'MIKE KRACK',
      cargo: 'Chefe de Equipe',
      imagem: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/04/17/794177690-gp22011144521st5112-scaled.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'YUKI TSUNODA',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/tsunoda.jpg.img.1024.medium.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NYCK DE VRIES',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/devries.jpg.img.1024.medium.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'FRANZ TOST',
      cargo: 'Chefe de Equipe',
      imagem: 'https://cdn-1.motorsport.com/images/amp/YP3M7xA2/s6/franz-tost-team-principal-scud.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LANDO NORRIS',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/norris.jpg.img.1024.medium.jpg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'OSCAR PIASTRI',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/piastri.jpg.img.1024.medium.jpg',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ZAK BROWN',
      cargo: 'Chefe de Equipe',
      imagem: 'https://resources.formula-e.pulselive.com/photo-resources/2022/12/22/8a16f01d-91ae-435a-b66b-71405fcf960b/Zak-Brown-McLaren-Racing-CEO.jpg?width=1440&height=810',
      time: times[6].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'KEVIN MAGNUSSEN',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/magnussen.jpg.img.1024.medium.jpg',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NICO HULKENBERG',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/hulkenberg.jpg.img.1024.medium.jpg',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GÜENTHER STEINER',
      cargo: 'Chefe de Equipe',
      imagem: 'https://fluidideas.s3.eu-west-1.amazonaws.com/haas/s3fs-public/2023-03/guenther5.jpg?VersionId=wwyB6dXc2GxD6stbFYjo1iAbSCw9ZjKi',
      time: times[7].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'VALTTERI BOTTAS',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/bottas.jpg.img.1024.medium.jpg',
      time: times[8].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUANYU ZHOU',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/zhou.jpg.img.1024.medium.jpg',
      time: times[8].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALESSANDRO ALUNNI BRAVI',
      cargo: 'Chefe de Equipe',
      imagem: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA17g2jK.img?w=997&h=561&m=4&q=81',
      time: times[8].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALEX ALBON',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/albon.jpg.img.1024.medium.jpg',
      time: times[9].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'LOGAN SARGEANT',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/sargeant.jpg.img.1024.medium.jpg',
      time: times[9].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JAMES VOWLES',
      cargo: 'Chefe de Equipe',
      imagem: 'https://cdn-4.motorsport.com/images/amp/6xEXogM0/s1000/james-vowles-williams-1.jpg',
      time: times[9].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador (id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCorPrimariaDoTime (corPrimaria, id) {
    setTimes(times.map(time => {
      if(time.id === id) {time.corPrimaria = corPrimaria;}
      return time;
    }
    ));
  }
  function mudarCorDeFundoDoTime (corSecundaria, id) {
    setTimes(times.map(time => {
      if(time.id === id) {time.corSecundaria = corSecundaria;}
      return time;
    }
    ));
  }
  
  function cadastrarTime(novoTime) {
    setTimes([...times, {...novoTime, id: uuidv4()}])
  }

function resolverFavorito(id) {
  setColaboradores (colaboradores.map(colaborador => {
    if(colaborador.id===id) colaborador.favorito = !colaborador.favorito;
    return colaborador
  }))
}

  return (
    <div className='App'>
      <Banner />
      <Formulario 
        cadastrarTime = {cadastrarTime}
        times={times.map(time => time.nome)} 
        aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} 
      />
      <section className='times'>
        <h1>Equipes 2023:</h1>
      {times.map((time, indice) => <Time
        aoFavoritar={resolverFavorito}
        mudarCor1 = {mudarCorPrimariaDoTime}
        mudarCor2={mudarCorDeFundoDoTime} 
        key={indice} 
        time={time}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar = {deletarColaborador}
      />)}
      </section>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
