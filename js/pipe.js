const FLOOR_HEIGHT = -8;
const DEFAULT_HEIGHT = 8;

AFRAME.registerComponent("pipe", {
  
  schema: {
    height: {type: 'int', default: DEFAULT_HEIGHT}, 
    gap: {type: 'number', default: 3}
  },
  
  init: function() {
    
    let bot = document.createElement("a-entity");
    let top = document.createElement("a-entity");
    
    let botBox1 = document.createElement("a-box");
    let botRing1 = document.createElement("a-ring");
    let botRing2 = document.createElement("a-ring");
    let botCyl1 = document.createElement("a-cylinder");
    let botCyl2 = document.createElement("a-cylinder");
    
    let topBox1 = document.createElement("a-box");
    let topRing1 = document.createElement("a-ring");
    let topRing2 = document.createElement("a-ring");
    let topCyl1 = document.createElement("a-cylinder");
    let topCyl2 = document.createElement("a-cylinder");
    
    botBox1.setAttribute("color", "#000000");

    botRing1.setAttribute("color", "#373535");
    botRing2.setAttribute("color", "#373535");
    
    botCyl1.setAttribute("color", "#fffcfc");
    botCyl2.setAttribute("color", "#fffcfc");
    
    topBox1.setAttribute("color", "#000000");

    topRing1.setAttribute("color", "#373535");
    topRing2.setAttribute("color", "#373535");
    
    topCyl1.setAttribute("color", "#fffcfc");
    topCyl2.setAttribute("color", "#fffcfc");
    
    const BOT_HEIGHT = this.data.height;
    botCyl1.setAttribute("height", BOT_HEIGHT);
    botCyl2.setAttribute("height", 1);
    botBox1.setAttribute("position", {y:FLOOR_HEIGHT+0.1});
    botRing1.setAttribute("position", {y:FLOOR_HEIGHT+BOT_HEIGHT});
    botRing2.setAttribute("position", {y:FLOOR_HEIGHT+BOT_HEIGHT-1});
    botCyl1.setAttribute("position", {y:FLOOR_HEIGHT+BOT_HEIGHT/2});
    botCyl2.setAttribute("position", {y:FLOOR_HEIGHT+BOT_HEIGHT-0.5});
    botBox1.setAttribute("depth", 0.2);
    
    const TOP_HEIGHT = 16 - this.data.height;
    topCyl1.setAttribute("height", TOP_HEIGHT);
    topCyl2.setAttribute("height", 1);
    topBox1.setAttribute("position", {y:FLOOR_HEIGHT+0.1});
    topRing1.setAttribute("position", {y:FLOOR_HEIGHT+TOP_HEIGHT});
    topRing2.setAttribute("position", {y:FLOOR_HEIGHT+TOP_HEIGHT-1});
    topCyl1.setAttribute("position", {y:FLOOR_HEIGHT+TOP_HEIGHT/2});
    topCyl2.setAttribute("position", {y:FLOOR_HEIGHT+TOP_HEIGHT-0.5});
    topBox1.setAttribute("depth", 0.2);
    
    botBox1.setAttribute("width", 2.5);
    botBox1.setAttribute("height", 2.5);
    botRing1.setAttribute("radius-inner", 1.19);
    botRing1.setAttribute("radius-outer", 1.35);
    botRing2.setAttribute("radius-inner", 1.19);
    botRing2.setAttribute("radius-outer", 1.35);
    botCyl1.setAttribute("radius", 1.2);
    botCyl2.setAttribute("radius", 1.34);
    botBox1.setAttribute("rotation", {x:-90, y:0, z:0});
    botRing1.setAttribute("rotation", {x:-90, y:0, z:0});
    botRing2.setAttribute("rotation", {x:-270, y:-180, z:0});
    botCyl1.setAttribute("material", {side:"double"});
    botCyl1.setAttribute("open-ended", true);
    botCyl2.setAttribute("open-ended", true);
    
    topBox1.setAttribute("width", 2.5);
    topBox1.setAttribute("height", 2.5);
    topRing1.setAttribute("radius-inner", 1.19);
    topRing1.setAttribute("radius-outer", 1.35);
    topRing2.setAttribute("radius-inner", 1.19);
    topRing2.setAttribute("radius-outer", 1.35);
    topCyl1.setAttribute("radius", 1.2);
    topCyl2.setAttribute("radius", 1.34);
    topBox1.setAttribute("rotation", {x:-90, y:0, z:0});
    topRing1.setAttribute("rotation", {x:-90, y:0, z:0});
    topRing2.setAttribute("rotation", {x:-270, y:-180, z:0});
    topCyl1.setAttribute("material", {side:"double"});
    topCyl1.setAttribute("open-ended", true);
    topCyl2.setAttribute("open-ended", true);
    
    top.setAttribute("rotation", {x:-180, y:-180, z:0});
    top.setAttribute("position", {x:0, y:this.data.gap, z:0});
    
    bot.appendChild(botBox1);
    bot.appendChild(botRing1);
    bot.appendChild(botRing2);
    bot.appendChild(botCyl1);
    bot.appendChild(botCyl2);
    
    top.appendChild(topBox1);
    top.appendChild(topRing1);
    top.appendChild(topRing2);
    top.appendChild(topCyl1);
    top.appendChild(topCyl2);
    
    this.el.appendChild(bot);
    this.el.appendChild(top);
    
  }
  
});