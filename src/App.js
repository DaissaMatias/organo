import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome:'Inter Miami',
      corPrimaria:'#f7b5cd',
      corSecundaria:'#ffe2ed'
    },
    {
      nome:'Flamengo',
      corPrimaria:'#C52613',
      corSecundaria:'#f9978b'
    },
    {
      nome:'Palmeiras',
      corPrimaria:'#006437',
      corSecundaria:'#66a287'
    },
    {
      nome:'Real Madrid',
      corPrimaria:'#FEBE10',
      corSecundaria:'#3374b2'
    },
    {
      nome:'Boca Juniors',
      corPrimaria:'#044D8C',
      corSecundaria:'#fcd566'
    },
    {
      nome:'Fluminense',
      corPrimaria:'#870A28',
      corSecundaria:'#338063'
    },
    {
      nome:'Chelsea',
      corPrimaria:'#034694',
      corSecundaria:'#6a7ab5'
    },
   
  ]

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
