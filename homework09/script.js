const body = document.querySelector('body');
const block = document.createElement('block');
const div = document.createElement('div');
body.insertAdjacentElement("afterend",block);
const randomColor = (() => {
    "use strict";
  
    const randomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
  
    return () => {
      var h = randomInt(0, 360);
      var s = randomInt(42, 98);
      var l = randomInt(40, 90);
      return `hsl(${h},${s}%,${l}%)`;
    };
  })();
function generateBlocks(){
    for ( let i = 0; i <25; i++){
    let div = document.createElement('div');
    div.style.backgroundColor = randomColor();
    div.style.width = '50px';
    div.style.height = '50px';
    block.appendChild(div);  
}
    return block
}
generateBlocks()
block.style.display = 'grid';
block.style.gridTemplateColumns = '50px 50px 50px 50px 50px';
block.style.marginLeft = '220px';
block.style.marginTop = '100px';
block.style.width = '250px';
block.style.height = '250px';

function generateBlocksInterval(){
setInterval(()=> {
block.childNodes.forEach(elem =>{
  return elem.style.backgroundColor = randomColor();
});
},1000)
}
generateBlocksInterval()
