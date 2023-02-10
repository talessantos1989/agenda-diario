import './formulario.css'
import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"

    
    
const Formulario = (props)=> {

const [titulo, setTitulo] = useState('')
const [descricao, setDescricao] = useState('')
const [hora, setHora] = useState('')
const [data, setData] = useState('')
const [link, setLink] = useState('')
const [local, setLocal] = useState('')
const [imagem, setImagem] = useState('')
const [categoria, setCategoria] = useState('')


const aoSalvar = (evento) =>{
    evento.preventDefault();
    props.aoEventoCadastrado({
        titulo,
        descricao,
        hora,
        data,
        local,
        imagem,
        categoria,
        link
    })
}

    return (
        <section className="formulario-Container">
            <form className="formulario-evento" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar Evento</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Título" 
                    placeholder="Digite o Nome do Evento"
                    valor={props.titulo}
                    aoAlterado={valor =>setTitulo(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Descrição"
                    placeholder="Digite a Descrição"
                    valor={props.descricao}
                    aoAlterado={valor =>setDescricao(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Hora" 
                    placeholder="Digite o horário do evento"
                    valor={props.hora}
                    aoAlterado={valor => setHora(valor)}
                />
                
                <CampoTexto 
                    obrigatorio={true} 
                    label="Data" 
                    placeholder="Digite a data do evento"
                    valor={props.data}
                    aoAlterado={valor => setData(valor)}
                />
                
                <CampoTexto 
                    obrigatorio={true} 
                    label="Local" 
                    placeholder="Digite o local do evento"
                    valor={props.local}
                    aoAlterado={valor => setLocal(valor)}
                />

                <CampoTexto 
                    obrigatorio={true} 
                    label="Link para Compra do Ingresso" 
                    placeholder="Digite a url para comprar o ingresso"
                    valor={props.link}
                    aoAlterado={valor => setLink(valor)}
                />
              
                <CampoTexto 
                    label="Imagem do Evento" 
                    placeholder="Url da imagem do Evento"
                    valor={props.imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Categoria' 
                    itens={props.categorias}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}    
                />

                <Botao> Criar Evento </Botao>
            </form>
        </section>
    )
}
export default Formulario