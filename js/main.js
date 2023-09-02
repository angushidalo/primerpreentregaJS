

alert("Bienvenidos a Piedra Papel y Tijeras")
alert("elige tu ataque")




  
  
  let jugar = true;
  
  
  do {

   let jugador = prompt("elige 1 para Piedra, 2 para Papel y 3 para Tijera");
     if (jugador == 1){
      console.log( "usted eligio Piedra")
     } else if (jugador == 2){
      console.log( "usted eligio Papel")
     } else if (jugador == 3) {
      console.log( "usted eligio Tijera")
     }
   let oponente = Math.round(Math.random() * 3);   

   if (oponente == 1){
    console.log( "la computadora eligió Piedra")
   } else if (oponente == 2){
    console.log( "la computadora eligió Papel")
   } else if (oponente == 3) {
    console.log( "la computadora eligió Tijera")
   }

   if (jugador == oponente ){
      console.log ("empataron")
   } else if (jugador == 1 && oponente == 3){
    console.log ("usted ha Ganado")
   } else if (jugador == 2 && oponente == 1){
   console.log ("usted ha Ganado")
   } else if (jugador == 3 && oponente == 2){
    console.log ("usted ha Ganado")
   } 

  if (oponente == 1 && jugador == 3){
    console.log ("la computadora ganó")
   } else if (oponente == 2 && jugador == 1){
   console.log ("la computadora ganó")
   } else if (oponente == 3 && jugador == 2){
    console.log ("la computadora ganó")
   }


    let respuesta = prompt("¿Quieres seguir jugando? Sí: 1 o No: 2 ");
  
   
    if (respuesta === "2") {
      
      jugar = false;
    }
  } while (jugar); 
  
 
  console.log("Gracias por jugar. Hasta pronto");