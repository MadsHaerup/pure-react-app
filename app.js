const fs = require('fs');
const path = require('path');
  
//creates a folder
fs.mkdir(path.join("src", 'assets'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });

  fs.mkdir(path.join("src", 'views'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });

  fs.mkdir(path.join("src", 'components'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });

  fs.mkdir(path.join("src", 'services'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });

  fs.mkdir(path.join("src", 'store'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });

  fs.mkdir(path.join("src", 'utils'),
  { recursive: true }, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully!');
  });
// ────────────────────────────────────────────────────────────────────────────────

//remove a folder or file
  fs.rm('src/App.css', { recursive: true }, (err) => {
    if (err) {
        throw err;
    }
    console.log(`item is deleted!`);
});

fs.rm('src/App.test.js', { recursive: true }, (err) => {
  if (err) {
      throw err;
  }
  console.log(`item is deleted!`);
});

fs.rm('src/reportWebVitals.js', { recursive: true }, (err) => {
  if (err) {
      throw err;
  }
  console.log(`item is deleted!`);
});

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



// ────────────────────────────────────────────────────────────────────────────────
