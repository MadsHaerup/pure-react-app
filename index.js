#!/usr/bin/env node
(function () {
const fs = require('fs');
const path = require('path');
//creates a folder
fs.mkdir(path.join("src", 'assets'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
  });
  fs.mkdir(path.join("src/assets", 'img'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
  });

  fs.mkdir(path.join("src", 'views'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
  });

  fs.mkdir(path.join("src", 'components'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
  });

  fs.mkdir(path.join("src", 'services'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
  });

  fs.mkdir(path.join("src", 'store'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
  });

  fs.mkdir(path.join("src", 'utils'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
  });
// ────────────────────────────────────────────────────────────────────────────────

//remove a folder or file
if (fs.existsSync('src/App.css')){
  fs.rm('src/App.css', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
});
}else{
  return;
}

if (fs.existsSync('src/App.test.js')){
  fs.rm('src/App.test.js', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
  });
}else{
  return;
}

if (fs.existsSync('src/reportWebVitals.js')){
  fs.rm('src/reportWebVitals.js', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
  });
}else{
  return;
}

if (fs.existsSync('src/logo.svg')){
  fs.rm('src/logo.svg', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
  });
}else{
  return;
}

if (fs.existsSync('public/favicon.ico')){
  fs.rm('public/favicon.ico', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
  });
}else{
  return;
}

if (fs.existsSync('public/logo192.png')){
  fs.rm('public/logo192.png', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
  });
}else{
  return;
}

if (fs.existsSync('public/logo512.png')){
  fs.rm('public/logo512.png', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
  });
}else{
  return;
}

// ────────────────────────────────────────────────────────────────────────────────

// replaces content from a file
const indexContent = `
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
`;
try {
  const indexContentdata = fs.writeFileSync('src/index.js', indexContent)
  //file written successfully
} catch (err) {
  console.error(err)
}

const indexCSS = `
body {
  margin: 0;
}
`;
try {
  const indexCssdata = fs.writeFileSync('src/index.css', indexCSS)
  //file written successfully
} catch (err) {
  console.error(err)
}

const App = `
function App() {
  return (
    <div className="App">
     
    </div>
  );
}
export default App;
`;
try {
  const Appdata = fs.writeFileSync('src/App.js', App)
  //file written successfully
} catch (err) {
  console.error(err)
}

const htmlIndex = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>Pure React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
`;

try {
  const htmlIndexData = fs.writeFileSync('public/index.html', htmlIndex)
  //file written successfully
} catch (err) {
  console.error(err)
}

const manifest = `
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "",
      "sizes": "",
      "type": ""
    },
    {
      "src": "",
      "type": "",
      "sizes": ""
    },
    {
      "src": "",
      "type": "",
      "sizes": ""
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
`;

try {
  const manifestData =  fs.writeFileSync('public/manifest.json', manifest)
} catch (error) {
  console.error(err)
}

console.log("succes! for more information please visit https://www.npmjs.com/package/pure-react-app")
})();
// ────────────────────────────────────────────────────────────────────────────────
