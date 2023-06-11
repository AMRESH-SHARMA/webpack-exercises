import './btn.scss';

function App1Btn() {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = 'App1Btn';
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = 'App1 btn clicked';
            p.classList.add('btn-text');
            body.appendChild(p);
        }
        button.classList.add('btn-design');
        body.appendChild(button);
}

export default App1Btn;