const inputNama = document.getElementById('inputNama');
const sisaChar = document.getElementById('sisaKarakter');
const inputCaptcha = document.getElementById('inputCaptcha');
const btnSubbmit = document.getElementById('submitButton');
inputNama.addEventListener('input',function(){
   let maxLength =  inputNama.maxLength
   let lengthValue = inputNama.value.length
   
   let sisa = maxLength - lengthValue;
   console.log('Max : ', maxLength);
   console.log('Panjang Karakter Saat Ini : ', lengthValue);
    sisaChar.innerText = sisa.toString();

    if(sisa === 0){
        sisaChar.innerText = "Batas Maks Tercapai"
    }else if(sisa <= 5){
        document.getElementById("notifikasiSisaKarakter").style.color = 'red';
    }else{
        document.getElementById("notifikasiSisaKarakter").style.color = 'black';
    }
})

inputNama.addEventListener('focus', function(){
     document.getElementById('notifikasiSisaKarakter').style.visibility = 'visible';
})
inputNama.addEventListener('blur', function(){
     document.getElementById('notifikasiSisaKarakter').style.visibility = 'hidden';
})

inputCaptcha.addEventListener('change', function(){
    const valueInput = inputCaptcha.value;

    if(valueInput === 'PRNU'){
        btnSubbmit.removeAttribute('disabled');
    }else{
        btnSubbmit.setAttribute('disabled','')
    }
})
document.getElementById('formDataDiri').addEventListener('submit', function (event) {
    event.preventDefault();
    const inputCaptcha = document.getElementById('inputCaptcha').value;
    if (inputCaptcha === 'PRNU') {
      alert('Selamat! Captcha Anda lolos :D');
    } else {
        console.log('--- BLOK ELSE BERHASIL DIEKSEKUSI ---'); 
      alert('Captcha Anda belum tepat :(');
     
    }
  });
    document.getElementById('inputCopy').addEventListener('copy', function () {
    const Value = document.getElementById('inputCopy').value
    alert(`Anda telah men-copy ${Value}`);
  });
  document.getElementById('inputPaste').addEventListener('paste', function () {
    alert('Anda telah mem-paste sebuah teks...');
  });