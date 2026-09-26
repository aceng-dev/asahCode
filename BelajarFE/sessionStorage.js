const sessionStorageKey = 'PRESS_FREQUENCY';

if(typeof sessionStorage !== 'undefined'){
    if(sessionStorage.getItem(sessionStorageKey) === null){
        sessionStorage.setItem(sessionStorageKey, 0);
    }
    const incBtn = document.getElementById('incrementButton');
    const clrBtn = document.getElementById('clear');
    const countBtn = document.getElementById('count');

    countBtn.innerText = sessionStorage.getItem(sessionStorageKey);

    incBtn.addEventListener('click', function(){
        let count = sessionStorage.getItem(sessionStorageKey);
        count++
        sessionStorage.setItem(sessionStorageKey, count);
        countBtn.innerText = sessionStorage.getItem(sessionStorageKey)
    })

    clrBtn.addEventListener('click', function(){
        sessionStorage.removeItem(sessionStorageKey);
        countBtn.innerText = 0;
    })
}else{
    alert('browser tidak mendukung local storage')
}