import './evento.css'
const Evento = ({imagem, titulo,descricao, data, hora, local, corDeFundo, link})=>{
    return(
        <article className="evento" >
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}/>
            <div className='rodape'>
                <div className='div-imagem'>
                    <img src={imagem} alt={titulo}/>
                </div>
                <div className='info-card'>
                    <div className="info-card-titulo">
                        <h4>{titulo}</h4>
                    </div>
                    <div className='info-card-descricao'>
                        <h5>{descricao}</h5>
                    </div>
                    <div className='info-card-data'>
                        <h5>{data}</h5>
                    </div>
                    <div className='info-card-hora'>
                        <h5>{hora}</h5>
                    </div>
                    <div className='info-card-local'>
                        <h5>{local}</h5>
                    </div>
                </div>
                <div className="info-card-botao">
                    <a href={link} className="botao" target="_blank" rel="noopener noreferrer">Ingressos</a>
                </div>
            </div>
            
        </article>

    )

}

export default Evento