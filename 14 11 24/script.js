const limitinput = document.getElementById('limit.input');
const startbutton = document.getElementById('start-btn');
const evennumbersdiv = document.getElementById('even-numbers');
const oddnumbersdiv = document.getElementById('odd-numbers');

startbutton.addEventListener('click',() => {
    const limit = parseInt(limitinput.value);
    if (isNaN(limit) || limit <=0){

        alert('enter positif num')
        return;
    }

    evennumbersdiv.textContent = 'even number : ';
    oddnumbersdiv.textContent = 'odd numbers : ';
    
    for (let i = 1; i <=limit; 1++) {
        if (1 % 2 === 0) {
            evennumbersdiv.textContent += i + ' ';
        } else {
            oddnumbersdiv.textContent += i + ' ' ;   
        }
    }
})
