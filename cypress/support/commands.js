class Commands {

    gerarTextoAleatorio(tamanho = 10) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let textoAleatorio = '';

        for (let i = 0; i < tamanho; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            textoAleatorio += caracteres.charAt(indiceAleatorio);
        }
        return textoAleatorio;
    }
    gerarEmailValido() {
        const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let prefixo = '';
        const tamanhoPrefixo = 10;
        for (let i = 0; i < tamanhoPrefixo; i++) {
            prefixo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return `${prefixo}@exemplo.com`;
    }
    gerarSenhaValida(tamanho = 12) {
        const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
        const numeros = '0123456789';
        const simbolos = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        const todosCaracteres = letrasMaiusculas + letrasMinusculas + numeros + simbolos;
        let senha = '';

        
        senha += letrasMaiusculas.charAt(Math.floor(Math.random() * letrasMaiusculas.length));
        senha += letrasMinusculas.charAt(Math.floor(Math.random() * letrasMinusculas.length));
        senha += numeros.charAt(Math.floor(Math.random() * numeros.length));
        senha += simbolos.charAt(Math.floor(Math.random() * simbolos.length));


        for (let i = senha.length; i < tamanho; i++) {
            senha += todosCaracteres.charAt(Math.floor(Math.random() * todosCaracteres.length));
        }
    
        senha = senha.split('').sort(() => Math.random() - 0.5).join('');

        return senha;
    }


}
export default new Commands