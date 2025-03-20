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

}
export default new Commands