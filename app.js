// array para almacenar nombres
let amigos = [];

// validacion de nombres
function validar_nombre(nombre) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
    return regex.test(nombre);
}

// agregar un amigos a la lista
 function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    // Obtener el valor del input y eliminar espacios
    const nombreCompleto = inputAmigo.value.trim();  

    // Validación del nombre
    if (!validar_nombre(nombreCompleto)) {
        alert("El nombre contiene caracteres especiales no permitidos");
        return;
    }

    // Verificacion de nombre completo si ya está en la lista de participantes
    if (amigos.includes(nombreCompleto)) {
        alert("Este nombre ya está en la lista, ingresa uno diferente.");
        return;
    }

    // el nombre es válido y no está duplicado
    if (amigos.length < 20) {
        amigos.push(nombreCompleto);
        mostrarAmigos();  // Mostrar los amigos en la consola
        inputAmigo.value = "";  // Limpiar el campo de texto después de agregar el nombre
    } else {
        alert("Ya se han agregado 20 amigos. No se pueden añadir más.");
    }
}

// Función para mostrar la lista de participantes
function mostrarAmigos() {
    // Limpiar la consola antes de mostrar los amigos
    console.clear();  
    console.log("Lista de Amigos:");
    amigos.forEach(function(amigo, index) {
        console.log(`${index + 1}. ${amigo}`);  // Mostrar cada amigo en la consola
    });
    }

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos 2 amigos para realizar el sorteo.");
        return;
    }

     // Hacer un sorteo aleatorio
    const amigosSorteados = [...amigos];  
     // Copiar la lista de amigos para no modificarla
    let resultado = [];

    while (amigosSorteados.length > 0) {
         // Sacar un amigo de la lista
        let amigo = amigosSorteados.pop();  
         // Elegir un participante aleatorio
        let amigoSecreto = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];  

         // Asegurarse de que no se sortee a sí mismo
        if (amigo !== amigoSecreto) {
            // Eliminar el amigo sorteado
            resultado.push(`${amigo} -> ${amigoSecreto}`);
            amigosSorteados.splice(amigosSorteados.indexOf(amigoSecreto), 1);  
        } else {
             // Si no se pudo sortear, vuelve a agregarlo
            amigosSorteados.push(amigo); 
        }
    }

     // Mostrar los resultados del sorteo
    const resultadoElement = document.getElementById("resultado");
     // Limpiar el resultado antes de mostrarlo
    resultadoElement.innerHTML = '';  

    resultado.forEach(function (par) {
        const li = document.createElement("li");
         // Mostrar el par de amigos secretos
        li.textContent = par; 
         // Agregar el li al resultado
        resultadoElement.appendChild(li);  
    });
}