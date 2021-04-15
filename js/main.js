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
    bolinhas.addEventListener('collide', colisao)
};

//colisão com o alvo
const colisao = event => {
    console.log('Chegou!!');
    if (event.detail.body.el.id === 'floor') {
        console.log("Não colidiu");
        event.detail.target.el.removeEventListener('collide', colisao);
        //apaga pra não entrar no if toda hr
        cena.removeChild(event.detail.target.el);
    } else if (event.detail.body.el.className === 'target') {
        console.log("coolidiu")
        event.detail.target.el.removeEventListener('collide', colisao);
        //remove da cena o alvo atingido
        cena.removeChild(event.detail.target.el);
        cena.removeChild(event.detail.body.el);
    }
    // Verifica se ainda existem alvos
    if (document.querySelectorAll('.target').length === 0) {
        console.log('Acabou os alvos');
    }
};
document.onkeydown = event => {
    if (event.which == 32) {
        lancarBolinha();
    }
};
