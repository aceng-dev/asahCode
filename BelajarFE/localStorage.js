const localStorageKey = 'PRESS_FREQUENCY';

if(typeof localStorage !== 'undefined'){
    if(localStorage.getItem(localStorageKey) === null){
        localStorage.setItem(localStorageKey, 0);
    }
    const incBtn = document.getElementById('incrementButton');
    const clrBtn = document.getElementById('clear');
    const countBtn = document.getElementById('count');

    countBtn.innerText = localStorage.getItem(localStorageKey);

    incBtn.addEventListener('click', function(){
        let count = localStorage.getItem(localStorageKey);
        count++
        localStorage.setItem(localStorageKey, count);
        countBtn.innerText = localStorage.getItem(localStorageKey)
    })

    clrBtn.addEventListener('click', function(){
        localStorage.removeItem(localStorageKey);
        countBtn.innerText = 0;
    })
}else{
    alert('browser tidak mendukung local storage')
}