AFRAME.registerComponent("dialog", {

    init: function() {
      //Caixa de Dialogo com o Usuário
      let background = document.createElement("a-plane");
      background.setAttribute("color", "#999999");
      background.setAttribute("width", 1.25);
      background.setAttribute("height", 0.7);
      background.setAttribute("opacity", 0.9);
      background.setAttribute("material", {shader: "flat"});
      this.el.appendChild(background);
  
      //Texto Escrito de Boas Vindas
      let welcome = document.createElement("a-text");
      welcome.setAttribute("value", "Bem-Vindo ao Galaxy Flappy Bird!!! \n\n Use o mouse para iniciar e pular. \n\n");
      welcome.setAttribute("align", "center");
      welcome.setAttribute("width", 1.5);
      welcome.setAttribute("font", "aileronsemibold");
      welcome.setAttribute("color", "#000");
      welcome.setAttribute("position", {y: 0.11})
      this.el.appendChild(welcome);
  
      //Texto de Pontuação
      let score = document.createElement("a-text");
      score.setAttribute("value", "Pontos");
      score.setAttribute("align", "center");
      score.setAttribute("width", 1.2);
      score.setAttribute("font", "aileronsemibold");
      score.setAttribute("color", "#990000");
      score.setAttribute("position", {x:-0.12, y: -0.02})
      this.el.appendChild(score);
  
      this.score = document.createElement("a-text");
      this.score.setAttribute("value", "0");
      this.score.setAttribute("align", "center");
      this.score.setAttribute("width", 4);
      this.score.setAttribute("font", "aileronsemibold");
      this.score.setAttribute("color", "#990000");
      this.score.setAttribute("position", {x:-0.11, y: -0.10})
      this.el.appendChild(this.score);
  
      let bestScore = document.createElement("a-text");
      bestScore.setAttribute("value", "Recorde");
      bestScore.setAttribute("align", "center");
      bestScore.setAttribute("width", 1.2);
      bestScore.setAttribute("font", "aileronsemibold");
      bestScore.setAttribute("color", "#38761D");
      bestScore.setAttribute("position", {x:0.12, y: -0.02})
      this.el.appendChild(bestScore);
  
      this.best = document.createElement("a-text");
      this.best.setAttribute("value", "0");
      this.best.setAttribute("align", "center");
      this.best.setAttribute("width", 4);
      this.best.setAttribute("font", "aileronsemibold");
      this.best.setAttribute("color", "#38761D");
      this.best.setAttribute("position", {x:0.13, y: -0.10})
      this.el.appendChild(this.best);
    }
  
  });