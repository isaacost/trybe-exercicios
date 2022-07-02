document.getElementById("header-container").style.backgroundColor = "green";
document.querySelector(".emergency-tasks").style.backgroundColor = "pink";
document.querySelector(".no-emergency-tasks").style.backgroundColor = "yellow";
document.getElementById("footer-container").style.backgroundColor = "darkgreen";


const tituloEmergencia = document.querySelectorAll(".emergency-tasks h3");
for (let i = 0; i < tituloEmergencia.length; i++){
    tituloEmergencia[i].style.backgroundColor = "purple";
}

const tituloNaoEmergencia = document.querySelectorAll(".no-emergency-tasks h3");
for (let i = 0; i < tituloNaoEmergencia.length; i++) {
    tituloNaoEmergencia[i].style.backgroundColor = "black";
}

