function createNewWorld() {
  const h2Element = document.createElement('h2');
  h2Element.innerHTML = 'Content loaded via simple src attribute';
  document.body.appendChild(h2Element);
}

createNewWorld();
