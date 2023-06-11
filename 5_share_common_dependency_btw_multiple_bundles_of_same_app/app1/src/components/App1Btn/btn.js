import './btn.scss';

function App1Btn(param) {
        const button = document.createElement('button');
        const body = document.querySelector('body');
        button.innerHTML = param+" btn";
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = param + ' btn clicked';
            p.classList.add('btn-text');
            body.appendChild(p);
        }
        button.classList.add('btn-design');
        body.appendChild(button);
}

export default App1Btn;