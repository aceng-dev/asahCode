function welcome(){
    alert('Deym bro muncul');
    const mainContents = document.getElementById('mainContainer');
    mainContents.style.display = 'inline';
}

function increment(){
    document.getElementById('count').innerText++;
    
    if(document.getElementById('count').innerText == 7){
        const hiddenMessage = document.createElement('p');
        hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';
        const image = document.createElement('img');
        image.setAttribute(
            'src',
            'https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg',
        );
        const contents = document.getElementById('mainContainer');
        contents.appendChild(hiddenMessage);
        contents.appendChild(image);
    }
}


let incrementButton = document.getElementById('incrementButton');
window.addEventListener('load',welcome);

incrementButton.addEventListener('click', increment);
