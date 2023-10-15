function añadirHabilidad() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList');
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
}
document.getElementById('addSkill').addEventListener('click', añadirHabilidad);


function saludoPersonalizado(addGracias) {
    alert ("¡Gracias por enviar sus datos!");
}


