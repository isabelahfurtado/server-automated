const locators = {
    LOGIN:{
        EMAIL:'#email',
        SENHA:'[data-testid="senha"]',
        ENTRAR_BUTTON:'[data-testid="entrar"]',
        CADASTRESE:'[data-testid="cadastrar"]',
    },
    CADASTRO_LOGIN:{
        NOME:'#nome',
        EMAIL1:'#email',
        SENHA1:'#password',
        CADASTRAR:'[data-testid="cadastrar"]',
        ADMINBOX:'#checkbox'
    },
    PAGINA_INCIAL:{
        CADASTRARUSUARIOS: '[data-testid="cadastrarUsuarios"]',
        LISTARUSUARIOS: '[data-testid="listarUsuarios"]',
        CADASTRARPRODUTOS: '[data-testid="cadastrarProdutos"]',
        LISTARPRODUTOS: '[data-testid="listarProdutos"]',
        RELATORIOS: '[data-testid="relatorios"]'
    }


}

export default locators;