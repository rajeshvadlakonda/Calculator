const calculator = document.querySelector('.calculator');
const keys = document.querySelector('.calculator__keys');
const display = document.querySelector('.calculator__display');
let previousKeyType = calculator.dataset.previousKeyType;  
let firstValue = calculator.dataset.firstValue;  
let operator = calculator.dataset.operator;  
const calculate = (n1,operator,n2) => {
    let result
    if (operator ==='add'){
        result = parseFloat(n1) + parseFloat(n2);
    }else if (operator ==='subtract'){
        result = parseFloat(n1) - parseFloat(n2);
    }else if (operator ==='multiply'){
        result = parseFloat(n1) * parseFloat(n2);
    }else if (operator ==='divide'){
        result = parseFloat(n1) / parseFloat(n2);
    }
    return result
}
keys.addEventListener('click', e => {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    let displayedNum = display.textContent
    
    if (e.target.matches('button')){
        // console.log('button clicked')
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
    }
    if (!action){
        if (displayedNum === '0' || previousKeyType === 'operator'){
            display.textContent = keyContent
        } else 
            display.textContent = displayedNum + keyContent
            previousKeyType = ''
    }
    //           ====================================
    if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
        ){  
            // console.log("actions clicked!! ")
            key.classList.add('is-depressed')
            previousKeyType = 'operator'
            firstValue = displayedNum    
            operator = action
        }
        if (action === 'decimal'){
            console.log('decimal clicked');
            display.textContent = displayedNum + '.'
        }   
        if (action === 'clear'){
            firstValue,secondValue=0;previousKeyType='';
            display.textContent = '';   
            console.log('clear clicked');
        }   
        if (action === 'calculate'){
            secondValue = displayedNum
            console.log(previousKeyType);
            display.textContent =  calculate(firstValue, operator , secondValue)
            // console.log(firstValue  + ''+operator+''+ secondValue);
        } 
        //           ===============================

})
