// ***************************Окно "Товар добавлен в корзину" START***************************
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
// ***************************Окно "Товар добавлен в корзину" END********

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

// ***************************Окно "Напишите нам" START***************************
const lostlink = document.querySelector(".contacts-gotlost");
const loginPopup = document.querySelector(".modal-login");
const loginClose = loginPopup.querySelector(".modal-close");
const popup_got_lost = document.querySelector(".modal-login")
const login = popup_got_lost.querySelector("[name=name]");
const password = popup_got_lost.querySelector("[name=email]");
const textLetter = document.querySelector(".text_letter-textarea")
const button = document.querySelector(".button")

lostlink.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.add("modal-show");
  popup_got_lost.classList.remove("modal-error");
});

loginClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  loginPopup.classList.remove("modal-show");
  popup_got_lost.classList.remove("modal-error");
});

button.addEventListener("click", function (evt) {
  if (!login.value || !password.value || !textLetter.value) {
   evt.preventDefault();
   popup_got_lost.classList.remove("modal-error");
   popup_got_lost.offsetWidth = popup_got_lost.offsetWidth;
   popup_got_lost.classList.add("modal-error");
   }
});
  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    loginPopup.classList.remove("modal-show");
  }
  });
// ***************************Окно "Напишите нам" END***************************

