
let score = 0; 
let highscore = 0; 


const piedraOpcion = document.getElementById("piedra");
const papelOpcion = document.getElementById("papel");
const tijeraOpcion = document.getElementById("tijera");
const resultadoJuego = document.getElementById("resultado");
const puntajeElemento = document.getElementById("puntaje");
const recordElemento = document.getElementById("record");


window.onload = function () {

  let storedHighscore = localStorage.getItem("highscore");

  if (storedHighscore) {
    highscore = parseInt(storedHighscore);
  }
  
  else {
    highscore = 0;
  }
  
  puntajeElemento.innerHTML = score;
  recordElemento.innerHTML = highscore;
 
  fetch("niveles.json")
    .then((response) => response.json())
    .then((data) => {
      
      this.niveles = data.niveles;
      
      this.iniciarNivel(0);
    });
};


piedraOpcion.addEventListener("click", () => iniciarJuego("piedra"));
papelOpcion.addEventListener("click", () => iniciarJuego("papel"));
tijeraOpcion.addEventListener("click", () => iniciarJuego("tijera"));


function iniciarJuego(opcion) {
  
  const movPC = movimientoPc();
  
  const movUsuario = opcion;
 
  const comp = compracion(movPC, movUsuario);
  
  if (comp == 1) {
    resultadoJuego.innerHTML =
      " usuario elige " +
      movUsuario +
      "<br> Pc elige " +
      movPC +
      "<br> <span class='ganador'>El ganador es usted</span>";
   
    score++;
   
    if (score > highscore) {
     
      highscore = score;
    
      localStorage.setItem("highscore", highscore);
    }
    
    this.estrellasObtenidas++;
    
    if (this.estrellasObtenidas == this.estrellasRequeridas) {
      
      this.indiceNivel++;
      
      this.iniciarNivel(this.indiceNivel);
    }
  }
  if (comp == 2) {
    resultadoJuego.innerHTML =
      " usuario elige " +
      movUsuario +
      "<br> Pc elige " +
      movPC +
      "<br> <span class='perdedor'>El perdedor es usted</span>";
  }
  if (comp == 3) {
    resultadoJuego.innerHTML =
      " usuario elige " +
      movUsuario +
      "<br> Pc elige " +
      movPC +
      "<br> <span class='empate'>La partida es un empate</span>";
  }
 
  puntajeElemento.innerHTML = score;
  recordElemento.innerHTML = highscore;
}


function movimientoPc() {
  const opciones = ["piedra", "papel", "tijera"];
  const random = Math.floor(Math.random() * 3);
  const mov = opciones[random];
  return mov;
}


function compracion(pc, usuario) {
  switch (usuario + pc) {
    case "piedratijera":
    case "papelpiedra":
    case "tijerapapel":
      return 1;
    case "tijerapiedra":
    case "piedrapapel":
    case "papeltijera":
      return 2;
    case "papelpapel":
    case "piedrapiedra":
    case "tijeratijera":
      return 3;
  }
}


function iniciarNivel(indice) {
 
  const nivel = this.niveles[indice];
  
  nivel.cajas.forEach((cajaData) => {
   
    const caja = new Caja(cajaData);
   
    this.stage.addChild(caja.el);
    
    this.cajas.push(caja);
  });
  
  nivel.estrellas.forEach((estrellaData) => {
    
    const estrella = new Estrella(estrellaData);
    
    this.stage.addChild(estrella.el);
    
    this.estrellas.push(estrella);
  });
  
  this.estrellasRequeridas = nivel.estrellas_requeridas;
}