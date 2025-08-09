// Array para almacenar los nombres de los amigos
let lista_amigos = []; 

function fn_adicionar_amigo() {
    // Obtenemos el valor del campo de texto
    let nombre = document.getElementById("txt_amigo").value;
    
    // Validación: si el campo está vacío, mostramos una alerta
    if (nombre.trim() === "") { 
        alert("Por favor, ingrese un nombre.");
        return; 
    }
    
    // Agregamos el nombre a la lista
    lista_amigos.push(nombre); 
    
    // Limpiamos el campo de texto
    document.getElementById("txt_amigo").value = ""; 
    
    // Actualizamos la lista visible en la página
    fn_mostrar_lista(); 
}

function fn_mostrar_lista() {
    // Generamos el HTML para la lista
    let lista_html = '';
    for (let i = 0; i < lista_amigos.length; i++) {
        lista_html += `<li>${lista_amigos[i]}</li>`;
    }

    // Insertamos el HTML en el elemento <ul>
    document.getElementById("lst_amigos").innerHTML = lista_html; 
}

function fn_sortear() {
    // Verificamos si hay amigos en la lista
    if (lista_amigos.length === 0) { 
        alert("No hay amigos para sortear. Por favor, añada al menos un amigo.");
        return;
    }
    // Se genera un numero aleatorio entre 0 y la longitud de la lista
    let indice_aleatorio = Math.floor(Math.random() * lista_amigos.length);

    // mostramos el nombre del amigo seleccionado
    document.getElementById("lbl_resultado").innerHTML = `El amigo secreto es: ${lista_amigos[indice_aleatorio]}`;
    // Limpiamos la lista de amigos
    document.getElementById("lst_amigos").innerHTML = ""; 
}