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
function filler(list,candidates){
  
  for (let i = 0; i < candidates.length; i++) {
    
    const li = document.createElement('li');
    li.textContent = candidates[i];
    list.append(li);
  }
  return list;
}