import './campo-texto.css'

const CampoTexto = (props) =>{

    
    return(
        <div className='input-container'>
            <label className='label-formulario'>{props.label}</label>
            <input className='input-formulario' 
                value={props.valor} 
                onChange={evento => props.aoAlterado(evento.target.value)} 
                required = {props.obrigatorio} 
                placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto