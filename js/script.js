const ingresoTexto = document.getElementById("ingresoTexto");
const buttonEncriptar = document.getElementById("buttonEncriptar");
const buttonDesencriptar = document.getElementById("buttonDesencriptar");
const buttonCopiar = document.getElementById("buttonCopiar");
const noTexto = document.getElementById("noTexto");
const busquedaImagen = document.getElementById("busquedaImagen");
const ingresoTextoDos = document.getElementById("ingresoTextoDos");
const right = document.getElementById("right");


// a - ai 
// e - enter
// i -imes
// o - ober
// u - ufat

let reemplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai" ],
    ["u", "ufat"],
]

const replace = (nuevoValor) => {
    noTexto.innerHTML =  nuevoValor;
    busquedaImagen.classList.add("oculto__imagen");
    ingresoTextoDos.style.display = "none";
    buttonCopiar.style.display = "block";
    right.classList.add("movil");
    noTexto.classList.add("movil");
    ingresoTexto.value = "";
}

const reset = () => {
    noTexto.innerHTML = "";
    busquedaImagen.classList.remove("oculto__imagen");
    ingresoTextoDos.style.display = "block";
    buttonCopiar.style.display = "none";
    right.classList.remove("movil");
    noTexto.classList.remove("movil");
    ingresoTexto.focus();
}

buttonEncriptar.addEventListener("click", ()=> {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function encriptar(newText){
            for(let i = 0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][0])){
                    newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
                }
            }
            return newText
        }
    }else{
        alert("¡ERROR! No se ingresó texto para encriptar.");
        reset();
    }
        replace(encriptar(texto))
});

buttonDesencriptar.addEventListener("click", ()=> {
    const texto = ingresoTexto.value.toLowerCase();
    if(texto != ""){
        function desencriptar(newText){
            for(let i = 0; i < reemplazar.length; i++){
                if(newText.includes(reemplazar[i][1])){
                    newText = newText.replaceAll(reemplazar[i][1], reemplazar[i][0]);
                }
            }
            return newText
        }
    }else{
        alert("¡ERROR! No se ingresó texto para desencriptar.");
        reset();
    }
    replace(desencriptar(texto))
});

buttonCopiar.addEventListener("click", ()=> {
    let texto = noTexto;
    texto.select();
    document.execCommand("copy");
    reset();
});