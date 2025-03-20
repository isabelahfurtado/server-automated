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
    CADASTRO_PRODUTO:{
        NOME:'#nome',
        PRECO:'preco',
        DESCRICAO:'#descricao',
        QUANTIDADE:'#quantity',
        IMAGEM:'#imagem',
        CADASTRAR:'#cadastrar'

    }


}

export default locators;