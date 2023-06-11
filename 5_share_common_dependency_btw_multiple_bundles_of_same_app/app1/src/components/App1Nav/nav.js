import './nav.scss';

 function App1Nav (param) {
    const h1 = document.createElement('h1');
    const body = document.querySelector('body');
    h1.innerHTML = 'Demonstration of common shared dependency using chunks<br/>This is "' + param + '" component heading';
    body.appendChild(h1);
    
}

export default App1Nav;


