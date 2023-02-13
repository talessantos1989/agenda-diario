import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import './evento.css'

const Evento = ({show,corDeFundo, aoDeletar, aoFavoritar})=>{

    function favoritar(){
        aoFavoritar(show.id)
    }

    const propsFavorito = {
        size: 25,
        onClick:favoritar
    }

    return(
        <article className="evento">
            <AiFillCloseCircle 
                size={25} 
                className="deletar" 
                onClick={() => aoDeletar(show.id)} 
            />
           
            
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}/>
            <div className='rodape'>
                <div className='div-imagem'>
                    <img src={show.imagem} alt={show.titulo}/>
                </div>
                <div className='info-card'>
                    <div className="info-card-titulo">
                        <h4>{show.titulo}</h4>
                    </div>
                    <div className='info-card-descricao'>
                        <h5>{show.descricao}</h5>
                    </div>
                    <div className='info-card-data'>
                        <h5>{show.data}</h5>
                    </div>
                    <div className='info-card-hora'>
                        <h5>{show.hora}</h5>
                    </div>
                    <div className='info-card-local'>
                        <h5>{show.local}</h5>
                    </div>
                    <div className='favorito'>
                        { show.favorito 
                            ? <AiFillHeart {...propsFavorito} /> 
                            : <AiOutlineHeart {...propsFavorito} />}
                    </div>
                </div>
                <div className="info-card-botao">
                    
                    <a href={show.link} className="botao" target="_blank" rel="noopener noreferrer">Ingressos</a>
                </div>
            </div>
            
        </article>

    )

}

export default Evento