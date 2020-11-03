// ***************************Блок "Слайдер" START***************************
  const firstButton = document.querySelectorAll(".slider-button-1");
  if (firstButton) {
  const secondButton = document.querySelectorAll(".slider-button-2");
  const sliderItems = document.querySelectorAll('.slider-item');
   for(let i = 0; sliderItems.length < i; i++ ) {
     sliderItems[i].classList.remove('active');
   }
  if (firstButton[0]) {
  firstButton[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderItems[0].classList.add('active');
    sliderItems[1].classList.remove('active');
    firstButton[1].classList.add('active');
    secondButton[1].classList.remove('active');
  });
  }
  if (secondButton[0]) {
  secondButton[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderItems[1].classList.add('active');
    sliderItems[0].classList.remove('active');
    secondButton[1].classList.add('active');
    firstButton[1].classList.remove('active');
  });
  }
  if (firstButton[1]) {
  firstButton[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderItems[0].classList.add('active');
    sliderItems[1].classList.remove('active');
    firstButton[1].classList.add('active');
    secondButton[1].classList.remove('active');
  });
  }
  if (secondButton[1]) {
  secondButton[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderItems[1].classList.add('active');
    sliderItems[0].classList.remove('active');
    secondButton[1].classList.add('active');
    firstButton[1].classList.remove('active');
 });
 }
 }
// ***************************Блок "Слайдер" END***************************

// ***************************Окно "Товар добавлен в корзину" START***************************
  let buy = document.querySelectorAll(".buy");
  if (buy) {
  let itemAddedToBasket = document.querySelector(".item-added-to-basket");
  let iconClose = document.querySelector(".button-close-basket");
  for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    itemAddedToBasket.classList.remove("close");
    });
  };
  iconClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    itemAddedToBasket.classList.add("close");
  });
  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!itemAddedToBasket.classList.contains("close")) {
      itemAddedToBasket.classList.add("close");
     }
  }
  });
  }
// ***************************Окно "Товар добавлен в корзину" END********

// *******************************КАРТА START***************************
  let link = document.querySelector(".main-contacts-map");
  if (link){
  let popup = document.querySelector(".popup");
  let iconclose = document.querySelector(".popup-close");
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("close");
  });
  iconclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("close");
  });

  window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains("close")) {
      popup.classList.add("close");
    }
  }
  });
  };
// *******************************КАРТА  END***************************

// ***************************Окно "Напишите нам" START***************************
const lostLink = document.querySelector(".contacts-got-lost");
if (lostLink) {
const loginPopup = document.querySelector(".modal-login");
if (loginPopup){
  const loginClose = loginPopup.querySelector(".modal-close");
  const popupGotLost = document.querySelector(".modal-login");
  const login = popupGotLost.querySelector("[name=name]");
  const password = popupGotLost.querySelector("[name=email]");
  const textLetter = document.querySelector(".text-letter-textarea");
  const button = document.querySelector(".button");

  lostLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.add("modal-show");
    popupGotLost.classList.remove("modal-error");
  });

  loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-show");
    popupGotLost.classList.remove("modal-error");
  });

  button.addEventListener("click", function (evt) {
    if (!login.value || !password.value || !textLetter.value) {
     evt.preventDefault();
     popupGotLost.classList.remove("modal-error");
     popupGotLost.classList.add("modal-error");
     }
  });
    window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      loginPopup.classList.remove("modal-show");
    }
    });
  }
  }
// ***************************Окно "Напишите нам" END***************************

// ***************************Блок "Сервисы" START***************************
  const deliveryWhite = document.querySelector(".services-delivery-item");
  if (deliveryWhite) {
  const guaranteeWhite = document.querySelector(".services-guarantee-item");
  const creditWhite = document.querySelector(".services-credit-item");

  const deliveryLink = document.querySelector(".services-delivery-item>*");
  const guaranteeLink = document.querySelector(".services-guarantee-link");
  const creditLink = document.querySelector(".services-credit-link");

  const delivery = document.querySelector(".delivery-block-div");
  const guarantee = document.querySelector(".guarantee-block-div");
  const credit = document.querySelector(".credit-block-div");

  deliveryLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    deliveryWhite.classList.add("color-white");
    guaranteeWhite.classList.remove("color-white");
    creditWhite.classList.remove("color-white");

    delivery.classList.remove("close");
    guarantee.classList.add("close");
    credit.classList.add("close");

    deliveryLink.classList.add("dgk-blue");
    guaranteeLink.classList.remove("dgk-blue");
    creditLink.classList.remove("dgk-blue");
  });
  guaranteeLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    guaranteeWhite.classList.add("color-white");
    deliveryWhite.classList.remove("color-white");
    creditWhite.classList.remove("color-white");

    guarantee.classList.remove("close");
    delivery.classList.add("close");
    credit.classList.add("close");

    guaranteeLink.classList.add("dgk-blue");
    deliveryLink.classList.remove("dgk-blue");
    creditLink.classList.remove("dgk-blue");
  });
  creditLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    creditWhite.classList.add("color-white");
    deliveryWhite.classList.remove("color-white");
    guaranteeWhite.classList.remove("color-white");

    credit.classList.remove("close");
    delivery.classList.add("close");
    guarantee.classList.add("close");

    creditLink.classList.add("dgk-blue");
    deliveryLink.classList.remove("dgk-blue");
    guaranteeLink.classList.remove("dgk-blue");
  });
  }
  // ***************************Блок "Сервисы" END***************************

  // ***************************ДВЕ КНОПКИ START***************************
  const triangleUp = document.querySelector(".triangle-up");
  if (triangleUp) {
  const triangleDown = document.querySelector(".triangle-down");
  triangleUp.addEventListener("click", function (evt) {
    evt.preventDefault();
    triangleUp.classList.add("active-arrow");
    triangleDown.classList.remove("active-arrow");
  });
  triangleDown.addEventListener("click", function (evt) {
    evt.preventDefault();
    triangleUp.classList.remove("active-arrow");
    triangleDown.classList.add("active-arrow");
  });
  }
// ***************************ДВЕ КНОПКИ END***************************

// ***************************МЕНЮ СОРТИРОВКА START***************************
  const byPriceLink = document.querySelector(".by-price-link");
  if (byPriceLink){
  const byTypeLink = document.querySelector(".by-type-link");
  const byFunctionalLink = document.querySelector(".by-functional-link");
  const sortingItem = document.querySelectorAll(".sorting-item");

  byPriceLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    sortingItem[0].classList.add("active-sorting");
    sortingItem[1].classList.remove("active-sorting");
    sortingItem[2].classList.remove("active-sorting");
  });
  byTypeLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    sortingItem[1].classList.add("active-sorting");
    sortingItem[0].classList.remove("active-sorting");
    sortingItem[2].classList.remove("active-sorting");
  });
  byFunctionalLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    sortingItem[2].classList.add("active-sorting");
    sortingItem[1].classList.remove("active-sorting");
    sortingItem[0].classList.remove("active-sorting");
  });
  }
// ***************************МЕНЮ СОРТИРОВКА END***************************
