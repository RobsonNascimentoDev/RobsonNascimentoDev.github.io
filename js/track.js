AFRAME.registerComponent("track", {

  schema: {
    pipes: { type: 'int', default: 10 },
    radius: { type: 'number', default: 50 },
    speed: { type: 'number', default: 0.1 },
    jump: { type: 'number', default: 0.1 },
    gravity: { type: 'number', default: -0.003 },
    gap: { type: 'number', default: 3 }
  },

  removeDummy() {
    var elem = document.getElementById('a-enter-vr-button');
    elem.parentNode.removeChild(elem);
    return false;
  },

  degreesToPosition: function (degrees) {
    let radians = THREE.Math.degToRad(degrees);
    let z = Math.cos(radians) * this.data.radius;
    let x = -1 * Math.sin(radians) * this.data.radius;
    return { x, y: 0, z };
  },

  degreesToPlayerRotation: function (degrees) {
    return { y: 90 - degrees }
  },

  init: function () {
    this.pipes = [];
    for (let i = 0; i < this.data.pipes; i++) {
      let degrees = 360 / this.data.pipes * i;
      let height = 8;
      if (i > 0) {
        if (i % 2 == 0) height = Math.floor((Math.random() * 7) + 2);
        else height = Math.floor((Math.random() * 8) + 8);
      }
      let pipe = document.createElement("a-entity");
      pipe.setAttribute("pipe", { height, gap: this.data.gap });
      pipe.setAttribute("position", this.degreesToPosition(degrees));
      this.el.appendChild(pipe);
      this.pipes[i] = { degrees, height };
    }

    this.scoreCurrent = 0;
    this.scoreBest = 0;

    this.player = document.createElement("a-entity");
    this.player.setAttribute("player", "");
    this.el.appendChild(this.player);
    this.setState("reset");

    this.dialog = document.createElement("a-entity");
    this.dialog.setAttribute("dialog", "");
    let position = this.degreesToPosition(this.playerDegrees);
    position.x -= 5;
    position.y = 1.6;
    position.z -= 0.8;
    this.dialog.setAttribute("position", position);
    this.dialog.setAttribute("rotation", this.degreesToPlayerRotation(this.playerDegrees));
    this.dialog.setAttribute("scale", { x: 5, y: 5, z: 5 });
    this.el.appendChild(this.dialog);

    let button = document.createElement("a-entity");
    button.setAttribute("button", "");
    this.el.appendChild(button);
    let self = this;
    this.el.addEventListener("click", function (evt) {
      self.clicked(evt);
    });
  },




});
