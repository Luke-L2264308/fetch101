/*
 * This is index.js
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

async function showMessage(elem, url) {
  const response = await fetch(url);
  const content = await response.text();
  elem.textContent = content;
}

async function showList(elem,url){
  const response = await fetch(url);
  
  if (response.ok){
    const content = await response.json();
    for (let i = 0;i<content.length;i++){
      const li = document.createElement('li');
      li.textContent = content[i];
      elem.append(li);
  }
    
  }
  
  else
    return reportError('No data');
  
  
}
async function startShowingMessage(elem,url){
  setInterval(async () => {
    const response = await fetch(url);
    const content = await response.text();
    elem.textContent = content;
  }, 1000);
}

async function handleError(elem,url){
  const response = await fetch(url);
  if (response.ok){
    const content = await response.text();
    elem.textContent = content;
  }
  else{
    elem.textContent = 'OH DEAR'
  }
}

function drawBox(canvas,url){
  setInterval(async() => {
    const response = await fetch(url);
    const content = await response.json();
    console.log(content);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(content.x,content.y,10,10);
  }, 1000);
}