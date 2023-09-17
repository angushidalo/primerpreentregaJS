

function determinarGanador(opcionUsuario, opcionPC) {
  
  if (opcionUsuario === opcionPC) {
    return "Empate";
  }
  
  if (opcionUsuario === "piedra") {
    
    if (opcionPC === "tijera") {
      return "Ganaste";
    }
    
    if (opcionPC === "papel") {
      return "Perdiste";
    }
  }
  
  if (opcionUsuario === "papel") {
    
    if (opcionPC === "piedra") {
      return "Ganaste";
    }
    
    if (opcionPC === "tijera") {
      return "Perdiste";
    }
  }
  
  if (opcionUsuario === "tijera") {
    
    if (opcionPC === "papel") {
      return "Ganaste";
    }
    
    if (opcionPC === "piedra") {
      return "Perdiste";
    }
  }
}

let jugar = true;

while (jugar) {
  const opciones = ["piedra", "papel", "tijera"];

  console.log("Piedra, papel o tijera");

  for (let i = 0; i < opciones.length; i++) {
    console.log(i + 1 + ". " + opciones[i]);
  }

  let opcionUsuario = prompt("Elige una opción: 1, 2 o 3");
  let opcionPC = Math.floor(Math.random() * opciones.length);

  console.log("Elegiste " + opciones[opcionUsuario - 1]);
  console.log("La computadora eligió " + opciones[opcionPC]);

  
  let mensaje = determinarGanador(opciones[opcionUsuario - 1], opciones[opcionPC]);
  console.log(mensaje);

  let salir = prompt("¿Quieres seguir jugando? S/N");

  if (salir === "N" || salir === "n") {
    jugar = false;
    alert("Gracias por jugar");
  } else if (salir !== "S" && salir !== "s") {
    jugar = false;
    alert("Opción inválida");
  }
}