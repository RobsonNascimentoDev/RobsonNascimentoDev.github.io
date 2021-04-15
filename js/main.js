// Função Para Criar Lançamento das Bolas
const lancarBolinha = () => {
    // Bolinhas dos Disparos
    const bolinhas = document.createElement("a-sphere");
    //Atributos da posição inicial da camera
    let posicao = myCamera.getAttribute("position");
    bolinhas.setAttribute("position", posicao);
    bolinhas.setAttribute("velocity", getDirection(myCamera, 10));
    bolinhas.setAttribute("dynamic-body", false);
    bolinhas.setAttribute("radius", 0.5);
    bolinhas.setAttribute("src", "img");
    cena.appendChild(bolinhas);
  };
  
  document.onkeydown = event => {
    if (event.which == 32) {
      lancarBolinha();
    } 
  };
  