function generarEleccionPc(){
    const opciones = ["Piedra", "Papel", "Tijera"];
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}

function determinarGanador(elecionJugador, eleccionPc){
    if(elecionJugador === eleccionPc){
        return "Empate!";
    } else if(
        (elecionJugador === "Piedra" && eleccionPc === "Tijera")||
        (elecionJugador === "Papel" && eleccionPc === "Piedra")||
        (elecionJugador === "Tijera" && eleccionPc === "Papel"))
        {return "Ganaste!"};
    if((eleccionPc === "Piedra" && elecionJugador === "Tijera")||
    (eleccionPc === "Papel" && elecionJugador === "Piedra")||
    (eleccionPc === "Tijera" && elecionJugador === "Papel")){
        return "Ha ganado la PC!";
    }
}

function jugar(elecionJugador){
    const eleccionPc = generarEleccionPc();
    const resultado = determinarGanador(elecionJugador, eleccionPc);

    alert("Tu eleccion: " + elecionJugador + "\nEleccion de la computadora: " + eleccionPc + "\nResultado: " + resultado);
}