const changeCaption = new Event("changeCaption");

window.addEventListener("load", function () {
  const tombol = document.getElementById("tombol");
  tombol.addEventListener("click", function () {
    tombol.dispatchEvent(changeCaption);
  });
  tombol.addEventListener("changeCaption", customEventHandler);
});

function customEventHandler(ev) {
  console.log("Event " + ev.type + " telah dijalankan");
  const caption = document.getElementById("caption");
  caption.innerText = "Anda telah membangkitkan custom event";
}
