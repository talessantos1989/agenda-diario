import './formulario.css'
import { useState } from "react"
import Botao from "../Botao"
import Campo from "../Campo"
import ListaSuspensa from "../ListaSuspensa"

    
    
const Formulario = ({aoEventoCadastrado, categorias, cadastrarCategoria})=> {

const [titulo, setTitulo] = useState('')
const [descricao, setDescricao] = useState('')
const [hora, setHora] = useState('')
const [data, setData] = useState('')
const [link, setLink] = useState('')
const [local, setLocal] = useState('')
const [imagem, setImagem] = useState('')
const [categoria, setCategoria] = useState('')
const [nomeCategoria, setNomeCategoria] = useState('')
const [corCategoria, setCorCategoria] = useState('')

const aoSalvar = (evento) =>{
    evento.preventDefault();
    aoEventoCadastrado({
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
                <Campo 
                    obrigatorio={true} 
                    label="Título" 
                    placeholder="Digite o Nome do Evento"
                    valor={titulo}
                    aoAlterado={valor =>setTitulo(valor)}
                />

                <Campo 
                    obrigatorio={true} 
                    label="Descrição"
                    placeholder="Digite a Descrição"
                    valor={descricao}
                    aoAlterado={valor =>setDescricao(valor)}
                />

                <Campo 
                    obrigatorio={true} 
                    label="Hora" 
                    placeholder="Digite o horário do evento"
                    valor={hora}
                    aoAlterado={valor => setHora(valor)}
                />
                
                <Campo 
                    obrigatorio={true} 
                    label="Data" 
                    placeholder="Digite a data do evento"
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                />
                
                <Campo 
                    obrigatorio={true} 
                    label="Local" 
                    placeholder="Digite o local do evento"
                    valor={local}
                    aoAlterado={valor => setLocal(valor)}
                />

                <Campo 
                    obrigatorio={true} 
                    label="Link para Compra do Ingresso" 
                    placeholder="Digite a url para comprar o ingresso"
                    valor={link}
                    aoAlterado={valor => setLink(valor)}
                />
              
                <Campo 
                    label="Imagem do Evento" 
                    placeholder="Url da imagem do Evento"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Categoria' 
                    itens={categorias}
                    valor={categoria}
                    aoAlterado={valor => setCategoria(valor)}    
                />

                <Botao> Criar Evento </Botao>
            </form>
            <form className="formulario-evento" onSubmit={(evento)=>{
                evento.preventDefault();
                cadastrarCategoria({categoria: nomeCategoria, cor: corCategoria } )
            }}>
                <h2>Preencha os dados para criar a Categoria</h2>
                <Campo 
                    obrigatorio 
                    label="Nome" 
                    placeholder="Digite o Nome da Categoria Nova"
                    valor={nomeCategoria}
                    aoAlterado={valor =>setNomeCategoria(valor)}
                />

                <Campo 
                    type='color'
                    obrigatorio={true} 
                    label="Cor"
                    placeholder="Digite a cor da Categproa"
                    valor={corCategoria}
                    aoAlterado={valor =>setCorCategoria(valor)}
                />
                <Botao> Criar Categoria </Botao>
            </form>
        </section>
    )
}
export default Formulario