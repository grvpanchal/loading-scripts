# Ways of loading JavaScript via loading scripts tags

## Description
The repo explain the different way to load script tag containing JavaScript onto you website.

## Setup

Install Packages
```sh
npm install
```
Start the server
```sh
npm start
```

Access you server via http://localhost:5000

# Information

This repo demonstrates the 5 ways import JavaScript via `<script>` tag

1. Normal Script Tag
```html
<script>
    function createWorld() {
        const h2Element = document.createElement('h2');
        h2Element.innerHTML = 'Content loaded via script tag';
        document.body.appendChild(h2Element);
    }

    createWorld();
</script>
```
2. Script Tag with local Resource file
```html
<script src="./assets/js/main.js"></script>
```
3. Script Tag with External Resource file
```html
<script src="//grvpanchal.ml/assets/js/createExternalWorld.js"></script>
```
4. Script Tag that dynamically loads a script file
```html
<script>
    function loadScriptDynamically(src) {
        const scriptElement = document.createElement('script');
        scriptElement.src = src;
        document.head.appendChild(scriptElement);
    }

    setTimeout(() => loadScriptDynamically('./assets/js/createDynamicInsertWorld.js'), 3000);
</script>
```
5. Script Tag that supports ES6 Module Import
```html
<script src="assets/js/app.js" type="module"></script>
```

I hope I have covered all ways. Address bar way not considered. Please let me know if you guys know additional
