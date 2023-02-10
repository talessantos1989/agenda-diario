import './banner.css' 


function Banner(){
    return (
        <>
            <header className="banner-container">
                <img className="banner-imagem" src="/imagens/banner-diario.png" alt="banner principal pagina organo"/>
            </header>
            <h1 className="cabecalho-banner">Preencha com seu evento</h1>
        </>
    )
}

export default Banner