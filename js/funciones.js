let contador = 0;
let noMuestraResultado = document.getElementById("sinResultado");
let siMuestraResultado = document.getElementById("conResultado");
let resultadoDeLaFuncion = document.getElementById("textoResultado");
let botonCopiar = document.getElementById("botonCopiar");
let textoUsuario = document.getElementById("textoUsuario");
const palabrasEncriptadas = {
    'a' : 'ai',
    'e' : 'enter',
    'i' : 'imes',
    'o' : 'ober',
    'u' : 'ufat'
};
const palabrasDesencriptadas = {
    'ai' : 'a',
    'enter' : 'e',
    'imes' : 'i',
    'ober' : 'o',
    'ufat' : 'u'
};
if(contador == 0){
    noMuestraResultado.style.display = 'grid';
    siMuestraResultado.style.display = 'none';
    contador++;
}
function verificarTexto(){
    if (/^[a-z\s.,¡!¿?()]*$/.test(textoUsuario.value)) {
        return true;       
    }else{
        return false;
    }
}
function activarResultado(){
    siMuestraResultado.style.display = 'grid';
    noMuestraResultado.style.display = 'none';
    botonCopiar.textContent = 'Copiar';
}
function encriptarTexto(){
    let verificador = verificarTexto();
    if(verificador == true){
        activarResultado();
        let texto = textoUsuario.value;
        let textoEncriptado = texto.replace(/[aeiou]/g, m => palabrasEncriptadas[m]);
        resultadoDeLaFuncion.textContent = textoEncriptado;
    }else{
        alert('Recuerda que el texto debe estar escrito en minúsculas');
    }
}
function desencriptarTexto(){
    let verificador = verificarTexto();
    if(verificador == true){
        activarResultado();
        let texto = textoUsuario.value;
        var textoDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, function(matched) {
            return palabrasDesencriptadas[matched];
        });
        resultadoDeLaFuncion.textContent = textoDesencriptado;
    }else{
        alert('Recuerda que el texto debe estar escrito en minúsculas');
    }
}
function copiarTexto(){
    navigator.clipboard.writeText(resultadoDeLaFuncion.textContent)
    botonCopiar.textContent = 'Texto Copiado';
}
