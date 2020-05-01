function createDynamicInsertWorld() {
  const h2Element = document.createElement('h2');
  h2Element.innerHTML = 'Content loaded via Dynamic Insert';
  document.body.appendChild(h2Element);
}

createDynamicInsertWorld();
