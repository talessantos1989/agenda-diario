import './campo.css'

const Campo = ({type='texto',label, valor, obrigatorio,placeholder, aoAlterado}) =>{

    
    return(
        <div className='input-container'>
            <label className='label-formulario'>{label}</label>
            <input type={type} className={`input-formulario input-formulario-${type}`} 
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required = {obrigatorio} 
                placeholder={placeholder}/>
        </div>
    )
}

export default Campo