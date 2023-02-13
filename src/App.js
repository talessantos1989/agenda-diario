import { useState } from 'react';
import Banner from './componentes/Banner';
import Categoria from './componentes/Categoria';
import Formulario from './componentes/Formulario';
import { v4 as uuidv4 } from 'uuid';

function App() {


  //desestruturando. constante state para poder modificar a cor
  const [categorias, setCategoria] = useState([
    {
      id: uuidv4(),
      categoria: 'Nacional', 
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      categoria: 'Internacional',
      cor:'#82CFFA',
    },
    {
      id: uuidv4(),
      categoria: 'Festivais',
      cor:'#A6D157',
    },
    {
      id: uuidv4(),
      categoria: 'Concertos',
      cor: '#E06B69'
    }
  ])


  const inital = [
  {
    id: uuidv4(),
    favorito: false,
    titulo: 'Skank Último Show – Arena das Dunas/RN',
    descricao:'Ingressos: R$ 120,00 até R$ 170,00 + Taxas. Pague em até 12x. Vendas online Ticket360. O evento irá ocorrer na área externa da Arena das Dunas.',
    hora:'Horário: Abertura: 20:00 –  Início: 23:00',
    data:'Data: 10 de fevereiro de 2023, sexta-feira',
    local:'Local: Arena das Dunas – Av. Prudente Morais, 5.121 – Lagoa Nova – Natal – RN',
    link:'https://www.ticket360.com.br/evento/26195/ingressos-para-skank-ultimo-show-em-natal',
    imagem:'https://diariodeshows.com.br/wp-content/uploads/2023/02/Skank.jpg',
    categoria:'Nacional'
  },

  {
    id: uuidv4(),
    favorito: false,
    titulo: 'Emicida Turnê AmarElo – Espaço Unimed/SP',
    descricao:'Ingressos:  ESGOTADOS. Vendas online Ticket360.',
    hora:'Horário: Abertura dos Portões: 20h30 | Horário do show: 22h30',
    data:'Data: 10 de fevereiro de 2023, sexta-feira',
    local:'Local: Espaço Unimed – R. Tagipuru, 795, Barra-Funda',
    link:'https://www.ticket360.com.br/ingressos/26085/ingressos-para-emicida-e-banda-na-tour-amarelo-data-extra',
    imagem:'https://diariodeshows.com.br/wp-content/uploads/2023/01/775.jpg',
    categoria:'Nacional'
  },

  {
    id: uuidv4(),
    favorito: false,
    titulo: 'JOHNNY GIOELI – LEGENDS MUSIC/SP',
    descricao:'Ingressos: R$120. Vendas online Showpass',
    hora:'Horário: 20h',
    data:'Data: 10 de fevereiro de 2023, sexta-feira',
    local:'Local: Legends Music Bar – R. Inácio Pereira da Rocha 367 – Vila Madalena',
    link:'https://showpass.com.br/evento/435/J0HNNY_GI0ELI_',
    imagem:'https://diariodeshows.com.br/wp-content/uploads/2023/02/Hihnny_Gioeli_SP.jpeg',
    categoria:'Internacional'
  },

  {
    id: uuidv4(),
    favorito: false,
    titulo: 'ORQUESTRA PETROBRAS SINFÔNICA GUNS N’ ROSES SINFÔNICO – Qualistage/RJ',
    descricao:'Ingressos: R$80 a R$280 inteira. Venda online Qualistage. ',
    hora:'Horário: 19h',
    data:'Data: 12 de fevereiro de 2023, domingo',
    local:'Local: Qualistage',
    link:'https://qualistage.com.br/eventim/92/orquestra-petrobras-sinfonica-guns-n-roses-sinfonico',
    imagem:'https://diariodeshows.com.br/wp-content/uploads/2023/02/23268-banner-principal-guns-e1675690398393.jpg',
    categoria:'Concertos'
  },
  {
    id: uuidv4(),
    favorito: false,
    titulo: 'https://diariodeshows.com.br/wp-content/uploads/2023/02/23268-banner-principal-guns-e1675690398393.jpg',
    descricao:'Ingressos: R$60 solidário. Vendas online Eventim.',
    hora:'Horário: 20h',
    data:'Data: 24 de fevereiro de 2023, sexta-feira',
    local:'Local: Circo Voador – R. dos Arcos, s/n',
    link:'https://www.eventim.com.br/event/attitude-metal-fest-krisiun-gangrena-gasosa-sangue-de-bode-clava-circo-voador-16500006/',
    imagem:'https://diariodeshows.com.br/wp-content/uploads/2023/01/attitudemetalfest-circovoador-eventim-profile.png',
    categoria:'Festivais'
  }
]

  const [shows, setShows] = useState(inital)

  const aoNovoEventoAdicionado = (show) =>{
    setShows([...shows, show])
  }

  function deletarEvento(id){
    setShows(shows.filter(show => show.id !== id))
  }

  function cadastrarCategoria(novaCategoria){
      setCategoria([...categorias, {...novaCategoria, id:uuidv4()}])
  }

  function mudarCorCard(cor, id){
    setCategoria(categorias.map(categoria => {
      if(categoria.id === id){
        categoria.cor = cor
      }
      return categoria;
    }));
  }

  function resolverFavorito(id){
    setShows(shows.map(show => {
      if(show.id === id) show.favorito = !show.favorito;
      return show;
    }))
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        cadastrarCategoria={cadastrarCategoria}
        categorias={categorias.map(categoria => categoria.categoria)} 
        aoEventoCadastrado={evento => aoNovoEventoAdicionado(evento)} 
      />

      {
        categorias.map((categoria, indice) => 
          <Categoria 
              mudarCor={mudarCorCard}
              key={indice}
              categorias={categoria} 
              id={categoria.id}
              shows={shows.filter(show => show.categoria === categoria.categoria)}
              aoDeletar={deletarEvento}
              aoFavoritar={resolverFavorito}
          />
      )}

    </div>
  );
}

export default App;
