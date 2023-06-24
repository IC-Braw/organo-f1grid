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

  const inicial = [
    {
      nome: 'MAX VERSTAPPEN',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.1024.medium.jpg',
      time: times[0].nome
    },
    {
      nome: 'SERGIO PEREZ',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/perez.jpg.img.1024.medium.jpg',
      time: times[0].nome
    },
    {
      nome: 'CHRISTIAN HORNER',
      cargo: 'Chefe de Equipe',
      imagem: 'https://formulapedia.com/wp-content/uploads/2022/10/Christian-Horner-salary-net-worth-forbes-wealth-houses-cars-investments.webp',
      time: times[0].nome
    },
    {
      nome: 'ADRIAN NEWEY',
      cargo: 'Projetista',
      imagem: 'https://cdn-4.motorsport.com/images/amp/0RrVB9g0/s6/adrian-newey-1.jpg',
      time: times[0].nome
    },
    {
      nome: 'RED BULL RB-19',
      cargo: 'Livery 2023',
      imagem: 'https://classic.exame.com/wp-content/uploads/2023/02/GettyImages-1246765746.jpg?quality=70&strip=info',
      time: times[0].nome
    },
    {
      nome: 'LEWIS HAMILTON',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/hamilton.jpg.img.1024.medium.jpg',
      time: times[1].nome
    },
    {
      nome: 'GEORGE RUSSELL',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/russell.jpg.img.1024.medium.jpg',
      time: times[1].nome
    },
    {
      nome: 'TOTO WOLFF',
      cargo: 'Chefe de Equipe',
      imagem: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/OC4LPPNFQRIPFF2EOXNXXIUWTU.jpg',
      time: times[1].nome
    },
    {
      nome: 'CHARLES LECLERC',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/leclerc.jpg.img.1024.medium.jpg',
      time: times[2].nome
    },
    {
      nome: 'CARLOS SAINZ',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/sainz.jpg.img.1024.medium.jpg',
      time: times[2].nome
    },
    {
      nome: 'FRÉDÉRIC VASSEUR',
      cargo: 'Chefe de Equipe',
      imagem: 'https://cdn.racingnews365.com/_1800x945_crop_center-center_75_none/Vasseur-Ferrari.jpg?v=1676464397',
      time: times[2].nome
    },
    {
      nome: 'PIERRE GASLY',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/gasly.jpg.img.1024.medium.jpg',
      time: times[3].nome
    },
    {
      nome: 'ESTEBAN OCON',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/ocon.jpg.img.1024.medium.jpg',
      time: times[3].nome
    },
    {
      nome: 'OTMAR SZAFNAUER',
      cargo: 'Chefe de Equipe',
      imagem: 'https://cdn.racingnews365.com/_1800x945_crop_center-center_75_none/otmar-szafnauer-alpine-aston-martin-racingnews365.jpg?v=1681203639',
      time: times[3].nome
    },
    {
      nome: 'FERNANDO ALONSO',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/alonso.jpg.img.1024.medium.jpg',
      time: times[4].nome
    },
    {
      nome: 'LANCE STROLL',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/stroll.jpg.img.1024.medium.jpg',
      time: times[4].nome
    },
    {
      nome: 'MIKE KRACK',
      cargo: 'Chefe de Equipe',
      imagem: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2022/04/17/794177690-gp22011144521st5112-scaled.jpg',
      time: times[4].nome
    },
    {
      nome: 'YUKI TSUNODA',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/tsunoda.jpg.img.1024.medium.jpg',
      time: times[5].nome
    },
    {
      nome: 'NYCK DE VRIES',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/devries.jpg.img.1024.medium.jpg',
      time: times[5].nome
    },
    {
      nome: 'FRANZ TOST',
      cargo: 'Chefe de Equipe',
      imagem: 'https://cdn-1.motorsport.com/images/amp/YP3M7xA2/s6/franz-tost-team-principal-scud.jpg',
      time: times[5].nome
    },
    {
      nome: 'LANDO NORRIS',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/norris.jpg.img.1024.medium.jpg',
      time: times[6].nome
    },
    {
      nome: 'OSCAR PIASTRI',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/piastri.jpg.img.1024.medium.jpg',
      time: times[6].nome
    },
    {
      nome: 'ZAK BROWN',
      cargo: 'Chefe de Equipe',
      imagem: 'https://resources.formula-e.pulselive.com/photo-resources/2022/12/22/8a16f01d-91ae-435a-b66b-71405fcf960b/Zak-Brown-McLaren-Racing-CEO.jpg?width=1440&height=810',
      time: times[6].nome
    },
    {
      nome: 'KEVIN MAGNUSSEN',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/magnussen.jpg.img.1024.medium.jpg',
      time: times[7].nome
    },
    {
      nome: 'NICO HULKENBERG',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/hulkenberg.jpg.img.1024.medium.jpg',
      time: times[7].nome
    },
    {
      nome: 'GÜENTHER STEINER',
      cargo: 'Chefe de Equipe',
      imagem: 'https://fluidideas.s3.eu-west-1.amazonaws.com/haas/s3fs-public/2023-03/guenther5.jpg?VersionId=wwyB6dXc2GxD6stbFYjo1iAbSCw9ZjKi',
      time: times[7].nome
    },
    {
      nome: 'VALTTERI BOTTAS',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/bottas.jpg.img.1024.medium.jpg',
      time: times[8].nome
    },
    {
      nome: 'GUANYU ZHOU',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/zhou.jpg.img.1024.medium.jpg',
      time: times[8].nome
    },
    {
      nome: 'ALESSANDRO ALUNNI BRAVI',
      cargo: 'Chefe de Equipe',
      imagem: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA17g2jK.img?w=997&h=561&m=4&q=81',
      time: times[8].nome
    },
    {
      nome: 'ALEX ALBON',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/albon.jpg.img.1024.medium.jpg',
      time: times[9].nome
    },
    {
      nome: 'LOGAN SARGEANT',
      cargo: 'Piloto',
      imagem: 'https://www.formula1.com/content/dam/fom-website/drivers/2023Drivers/sargeant.jpg.img.1024.medium.jpg',
      time: times[9].nome
    },
    {
      nome: 'JAMES VOWLES',
      cargo: 'Chefe de Equipe',
      imagem: 'https://cdn-4.motorsport.com/images/amp/6xEXogM0/s1000/james-vowles-williams-1.jpg',
      time: times[9].nome
    }
  ]

  const [colaboradores, setColaboradores] = useState(inicial)
  
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className='App'>
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <section className='times'>
        <h1>Equipes 2023:</h1>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      </section>
      <Rodape></Rodape>
    </div>
  );
}

export default App;
