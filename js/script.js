 // *******************************КАРТА START***************************

  let link = document.querySelector(".main-contacts-map");
  let popup = document.querySelector(".popup");
  let iconclose = document.querySelector(".popup_close");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("close");
  });

  iconclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("close")
  });

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains("close")) {
      evt.preventDefault();
      popup.classList.add("close");
    }
  }
  });

 // *******************************КАРТА  END***************************
