const formDataDiri = document.getElementById('formDataDiri');

formDataDiri.addEventListener('submit', function(event){
    const nama = document.getElementById('inputNama').value;
    const domisili = document.getElementById('inputDomisili').value;
    const hiddenMessage = `Halo ${nama}, dari ${domisili}`;

    const messageAfterSubmit = document.getElementById('messageAfterSubmit');
    messageAfterSubmit.innerText = hiddenMessage;
    event.preventDefault();
})