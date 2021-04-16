let proximaFase = 'fase2.html';
//Documentação Aframe - Uso de Áudio
// var entity = document.querySelector('[sound]');
// var disparos = document.querySelector('[sound1]');

var audioPlayer = document.querySelector('#audio-player');

// Função Para Criar Lançamento das Bolas
const lancarBolinha = () => {
  // Bolinhas dos Disparos
  const bolinhas = document.createElement("a-sphere");
  //Atributos da posição inicial da camera
  let posicao = myCamera.getAttribute("position");
  bolinhas.setAttribute("position", posicao);
  bolinhas.setAttribute("velocity", getDirection(myCamera, 20));
  bolinhas.setAttribute("dynamic-body", false);
  bolinhas.setAttribute("radius", 0.5);
  bolinhas.setAttribute("src", "img");
  cena.appendChild(bolinhas);
  audioPlayer.components['sound__disparos'].playSound();
  // disparos.components.sound.playSound();
  bolinhas.addEventListener('collide', colisao);
};

//colisão com o alvo
const colisao = event => {
  if (event.detail.body.el.id === 'floor') {
    console.log("Não colidiu");
    event.detail.target.el.removeEventListener('collide', colisao);
    //apaga pra não entrar no if toda hr
    cena.removeChild(event.detail.target.el);
  } else if (event.detail.body.el.className === 'target') {
    console.log("coolidiu")
    audioPlayer.components['sound__menu'].playSound();
    // entity.components['sound_menu'].playSound();
    // menu.components.sound.playSound();
    // audioPlayer.components.sound_menu.playSound();
    // entity.components.sound.playSound();
    event.detail.target.el.removeEventListener('collide', colisao);
    //remove da cena o alvo atingido
    cena.removeChild(event.detail.target.el);
    cena.removeChild(event.detail.body.el);
  }
  // Verifica se ainda existem alvos
  if (document.querySelectorAll('.target').length === 0) {
    console.log('Acabou os alvos');
    audioPlayer.components['sound__aplausos'].playSound();
    esperaAplausos();
  }
};

document.onkeydown = event => {
  if (event.which == 32) {
    lancarBolinha();
  }
};

function espera() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

async function esperaAplausos() {
  await espera();
  location.href = proximaFase;
  
};
