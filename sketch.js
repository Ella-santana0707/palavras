let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Eita gloria","É de Deus", "Maranata"]
  palavra = random(palavras);
  return random(palavras);
}

function inicializaCores(){
  background("#2196F3");
  fill("#3F51B5");
  textSize(64);
  textAlign(CENTER, CENTER);
}
function palavraParcial(minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo,1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
inicializaCores();
  let texto = palavraParcial(0, width)

  text(texto, 200, 200); 
 
  
  
  /*if(mouseX < 50){
    let palavra ="E"
    text(palavra,200,200);
  }else if(mouseX < 100){
    let palavra = "Ei";
    text(palavra,200,200);
  } else if(mouseX<150){
    let palavra = "Eit";
    text(palavra,200,200);
  } else if(mouseX<200){
    let palavra = "Eita ";
    text(palavra,200,200);
        } else if(mouseX<250){
    let palavra = "E";
    text(palavra,200,200);
  } */
}