import styled from "styled-components";


// const ListaSuspensaContainer = styled.div`

// `

const SelecaoListaSuspensa = styled.select`
background-color: #FFF;
box-shadow: 10px 10px 30px rgba(0,0,0,0.06);
width: 100%;
border: none;
font-size: 16px;
padding: 8px;
box-sizing: border-box;
border-radius: 5px
`

// const Opcoes = styled.option`

// `

const Descricao = styled.label`
    display: block;
    margin-botton: 8px;
    font-size: 18px;
    margin: 10px 0;
`


const ListaSuspensa = (props) =>{
    return(
        <div>
            <Descricao>{props.label}</Descricao>
            <SelecaoListaSuspensa 
                required={props.obrigatorio} 
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)}
            >
                <option value=""/>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </SelecaoListaSuspensa>
        </div>
    )
}
export default ListaSuspensa;