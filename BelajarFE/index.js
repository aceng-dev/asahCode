const imgCube = document.getElementById('gambar');
imgCube.setAttribute('width', 300);
imgCube.setAttribute('height',215);

const settingsButton = document.createElement('button');
settingsButton.textContent = 'Settings';
settingsButton.setAttribute('class', 'button');
const parentButton = document.getElementById('groupButtons');
parentButton.appendChild(settingsButton)




const mathButton = document.createElement('button');
mathButton.textContent = 'Matematika';
mathButton.setAttribute('class','button');
const sejarahButton = parentButton.children[0];
parentButton.insertBefore(mathButton,sejarahButton);
const colectButton = document.querySelectorAll('.button');
const playButton = colectButton[4];
playButton.setAttribute('disabled', true);

for( let radiusButton of colectButton){
    radiusButton.style.borderRadius = '10px';
}


const dicoding = document.getElementById('dicodingLink');
dicoding.innerText = 'Belajar Programming Di Dicoding';
dicoding.innerHTML = '<i> Belajar Programming Di Dicoding </i>'

const google = document.getElementById('googleLink');
google.innerHTML = '<i> Mencari Sesuatu Di Google </i>'


