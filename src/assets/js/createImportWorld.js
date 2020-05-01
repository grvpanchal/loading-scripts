export default function createImportWorld() {
  const h2Element = document.createElement('h2');
  h2Element.innerHTML = 'Content Loaded via ES Module Import';
  document.body.appendChild(h2Element);
}
