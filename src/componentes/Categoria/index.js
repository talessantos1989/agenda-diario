import Evento from "../Evento";
import './categoria.css'


const Categoria = (props)=>{
    
    return(

        //o if dele é com essa sintaxe
        (props.shows.length > 0) && 
        <section className="categoria-evento">
            <h3 className="titulo-evento" style={{ borderColor: props.corPrimaria}}>{props.categoria}</h3>
            <div className="eventos">
                {props.shows.map(item => <Evento 
                    key={item.titulo} 
                    titulo={item.titulo} 
                    data={item.data} 
                    link={item.link}
                    hora={item.hora}
                    local={item.local}
                    descricao={item.descricao}
                    imagem={item.imagem} 
                    corDeFundo={props.corPrimaria}/> )}
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