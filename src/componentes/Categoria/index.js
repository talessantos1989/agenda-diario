import Evento from "../Evento";
import './categoria.css'


const Categoria = ({shows, categorias, aoDeletar, mudarCor,aoFavoritar})=>{
    
    return(
        //o if dele é com essa sintaxe
        (shows.length > 0) && 
        <section className="categoria-evento">
            <input onChange={evento => mudarCor(evento.target.value, categorias.id)} type='color' value={categorias.cor} className='input-cor' />
            <h3 className="titulo-evento" style={{ borderColor: categorias.corPrimaria}}>{categorias.categoria}</h3>
            <div className="eventos">
                {shows.map((show, indice) => {
                    return <Evento 
                                key={indice} 
                                show = {show} 
                                corDeFundo={categorias.cor} 
                                aoDeletar={aoDeletar}
                                aoFavoritar={aoFavoritar}
                            /> 

                })}
            </div>
        </section>
        
       /* (props.shows.length > 0) ? <CategoriaEvento style={css}>
        <TituloEvento style={{ borderColor: props.corPrimaria}}>{props.categoria}</TituloEvento>
        <Eventos>
            {props.shows.map(item => <Evento titulo={item.titulo} data={item.data} imagem={item.imagem} /> )}
        </Eventos>
    </CategoriaEvento>  
    : ''*/
    )
}

export default Categoria