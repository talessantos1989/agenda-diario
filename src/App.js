import { useState } from 'react';
import Banner from './componentes/Banner';
import Categoria from './componentes/Categoria';
import Formulario from './componentes/Formulario';

function App() {


  const categorias = [
    {
      categoria: 'Nacional', 
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      categoria: 'Internacional',
      corPrimaria:'#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      categoria: 'Festivais',
      corPrimaria:'#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      categoria: 'Concertos',
      corPrimaria: '#E06B69',
      corSecundaria:'#FDE7E8'
    }
  ]
  const [shows, setShows] = useState([])

  const aoNovoEventoAdicionado = (show) =>{
    setShows([...shows, show])
  }
  console.log(shows)

  return (
    <div className="App">
      <Banner/>
      <Formulario categorias={categorias.map(item => item.categoria)} aoEventoCadastrado={show => aoNovoEventoAdicionado(show)} />

      {categorias.map(categoria => <Categoria 
        key={categoria.categoria} 
        categoria={categoria.categoria} 
        corPrimaria={categoria.corPrimaria}
        corSecundaria={categoria.corSecundaria}
        shows={shows.filter(show => show.categoria === categoria.categoria)}
        />)}

    </div>
  );
}

export default App;
