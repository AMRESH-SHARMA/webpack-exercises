import './nav.scss';

 function App1Nav () {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = 'Webpack is awesome. This is App1 Nav';
    body.appendChild(h1);
    
}

export default App1Nav;


