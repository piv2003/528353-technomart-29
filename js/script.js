 // *******************************КАРТА START***************************
  let buy = document.querySelectorAll(".buy");
  let ItemAddedToBasket = document.querySelector(".item-added-to-basket")
  let icon_close = document.querySelector(".button-close-basket")

  for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    ItemAddedToBasket.classList.toggle("open")
    ItemAddedToBasket.classList.remove("close")
    });
  };
  icon_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    ItemAddedToBasket.classList.remove("open")
    ItemAddedToBasket.classList.toggle("close")
  });

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

 // ***************************Окно "Товар добавлен в корзину" START***************************

// ***************************Окно "Товар добавлен в корзину" END***************************
