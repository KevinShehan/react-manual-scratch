import {createRoot} from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    React.createElement('div', null, 
        React.createElement('h1', null, "Hello, World!"),
        React.createElement('p', null, "This is a simple React app.")
    ),
      React.createElement('div', null, 
        React.createElement('h1', null, "Hello, World!"),
        React.createElement('p', null, "This is a simple React app.")
    ),
    
      React.createElement('div', null, 
        React.createElement('h1', null, "Hello, World!"),
        React.createElement('p', null, "This is a simple React app.")
    ),
    React.createElement('div', null, 
      React.createElement('h1', null, "Hello, World!"),
      React.createElement('p', null, "This is a simple React app.")
  )
);


//react render