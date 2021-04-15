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

//colisão com o alvo
const colisao = event => {
    console.log('Chegou!!');
    if (event.detail.body.el.id === 'floor') {
        console.log("Não colidiu");
        event.detail.target.el.removeEventListener('collide', colisao);
    } else if (event.detail.body.el.className === 'target') {
        console.log("coolidiu")
    }
};

document.onkeydown = event => {
    if (event.which == 32) {
        lancarBolinha();
    }
};
