function welcome() {
  alert("Deym bro muncul");
  const mainContents = document.getElementById("mainContainer");
  mainContents.style.display = "inline";
}

function increment() {
  document.getElementById("count").innerText++;

  if (document.getElementById("count").innerText == 7) {
    const hiddenMessage = document.createElement("p");
    hiddenMessage.innerText = "Selamat! Anda menemukan hadiah tersembunyi...";
    const image = document.createElement("img");
    image.setAttribute(
      "src",
      "https://raw.githubusercontent.com/aceng-dev/gambar-web_tugas1/fd908e573d55fe8651d178491fb12911f1c5f5e5/WhatsApp%20Image%202026-02-03%20at%2013.32.10.jpeg",
    );
    image.setAttribute("height", "250");
    const contents = document.getElementById("mainContainer");
    contents.appendChild(hiddenMessage);
    contents.appendChild(image);
  }
} 

let incrementButton = document.getElementById("incrementButton");
window.addEventListener("load", welcome);

incrementButton.addEventListener("click", increment);
