const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('#input');

keys.addEventListener('click', e =>{
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    let displayedNum = display.value; 
    
    if (e.target.matches('button')){
        Array.from(key.parentNode.children).forEach(k => k.classList)


    }
})