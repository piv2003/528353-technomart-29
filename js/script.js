// ***************************Окно "Товар добавлен в корзину" START***************************
  let buy = document.querySelectorAll(".buy");
  if (buy) {
  let ItemAddedToBasket = document.querySelector(".item-added-to-basket");
  let icon_close = document.querySelector(".button-close-basket");

  for (var i = 0; i < buy.length; i++) {
    buy[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    ItemAddedToBasket.classList.toggle("open");
    ItemAddedToBasket.classList.remove("close");
    });
  };
  icon_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    ItemAddedToBasket.classList.remove("open");
    ItemAddedToBasket.classList.toggle("close");
  });
  }
// ***************************Окно "Товар добавлен в корзину" END********

// *******************************КАРТА START***************************
  let link = document.querySelector(".main-contacts-map");
  if (link){
  let popup = document.querySelector(".popup");
  let iconclose = document.querySelector(".popup_close");
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
      evt.preventDefault();
      popup.classList.add("close");
    }
  }
  });
  };
// *******************************КАРТА  END***************************

// ***************************Окно "Напишите нам" START***************************
const lostlink = document.querySelector(".contacts-gotlost");
if (lostlink) {
const loginPopup = document.querySelector(".modal-login");
if (loginPopup){
  const loginClose = loginPopup.querySelector(".modal-close");
  const popup_got_lost = document.querySelector(".modal-login");
  const login = popup_got_lost.querySelector("[name=name]");
  const password = popup_got_lost.querySelector("[name=email]");
  const textLetter = document.querySelector(".text_letter-textarea");
  const button = document.querySelector(".button");

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
  }
  }
// ***************************Окно "Напишите нам" END***************************

// ***************************Блок "Сервисы" START***************************
  const deliverywhite = document.querySelector(".services-delivery-item");
  if (deliverywhite) {
  const guaranteewhite = document.querySelector(".services-guarantee-item");
  const creditwhite = document.querySelector(".services-credit-item");

  const deliverylink = document.querySelector(".services-delivery-item>*");
  const guaranteelink = document.querySelector(".services-guarantee-link");
  const creditlink = document.querySelector(".services-credit-link");

  const delivery = document.querySelector(".delivery-block-div");
  const guarantee = document.querySelector(".guarantee-block-div");
  const credit = document.querySelector(".credit-block-div");

  deliverylink.addEventListener("click", function (evt) {
    evt.preventDefault();
    deliverywhite.classList.add("color-white");
    guaranteewhite.classList.remove("color-white");
    creditwhite.classList.remove("color-white");

    delivery.classList.remove("close");
    guarantee.classList.add("close");
    credit.classList.add("close");

    deliverylink.classList.add("dgk-blue");
    guaranteelink.classList.remove("dgk-blue");
    creditlink.classList.remove("dgk-blue");
  });
  guaranteelink.addEventListener("click", function (evt) {
    evt.preventDefault();
    guaranteewhite.classList.add("color-white");
    deliverywhite.classList.remove("color-white");
    creditwhite.classList.remove("color-white");

    guarantee.classList.remove("close");
    delivery.classList.add("close");
    credit.classList.add("close");

    guaranteelink.classList.add("dgk-blue");
    deliverylink.classList.remove("dgk-blue");
    creditlink.classList.remove("dgk-blue");
  });
  creditlink.addEventListener("click", function (evt) {
    evt.preventDefault();
    creditwhite.classList.add("color-white");
    deliverywhite.classList.remove("color-white");
    guaranteewhite.classList.remove("color-white");

    credit.classList.remove("close");
    delivery.classList.add("close");
    guarantee.classList.add("close");

    creditlink.classList.add("dgk-blue");
    deliverylink.classList.remove("dgk-blue");
    guaranteelink.classList.remove("dgk-blue");
  });
  }
  // ***************************Блок "Сервисы" END***************************

  // ***************************ДВЕ КНОПКИ START***************************
  const first_button = document.querySelector(".triangle-up");
  if (first_button) {
  const second_button = document.querySelector(".triangle-down");
  first_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    first_button.classList.add("active-arrow");
    second_button.classList.remove("active-arrow");
  });
  second_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    first_button.classList.remove("active-arrow");
    second_button.classList.add("active-arrow");
  });
  }
// ***************************ДВЕ КНОПКИ END***************************

// ***************************МЕНЮ СОРТИРОВКА START***************************
  const by_price = document.querySelector(".by-price-link");
  if (by_price){
  const by_type = document.querySelector(".by-type-link");
  const by_functionality = document.querySelector(".by-functional-link");
  const sorting_item = document.querySelectorAll(".sorting-item");

  by_price.addEventListener("click", function (evt) {
    evt.preventDefault();
    sorting_item[0].classList.add("active-sorting");
    sorting_item[1].classList.remove("active-sorting");
    sorting_item[2].classList.remove("active-sorting");
  });
  by_type.addEventListener("click", function (evt) {
    evt.preventDefault();
    sorting_item[1].classList.add("active-sorting");
    sorting_item[0].classList.remove("active-sorting");
    sorting_item[2].classList.remove("active-sorting");
  });
  by_functionality.addEventListener("click", function (evt) {
    evt.preventDefault();
    sorting_item[2].classList.add("active-sorting");
    sorting_item[1].classList.remove("active-sorting");
    sorting_item[0].classList.remove("active-sorting");
  });
  }
// ***************************МЕНЮ СОРТИРОВКА END***************************

// ***************************Блок "Слайдер" START***************************
  const button1 = document.querySelectorAll(".slider-button-1");
  if (button1) {
  const button2 = document.querySelectorAll(".slider-button-2");
  const sliderItems = document.querySelectorAll('.slider-item');
   for(let i = 0; sliderItems.length < i; i++ ) {
     sliderItems[i].classList.remove('active');
   }
  button1[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderItems[0].classList.add('active');
    sliderItems[1].classList.remove('active');

    button1[1].classList.add('active');
    button2[1].classList.remove('active');
  });
  button2[0].addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderItems[1].classList.add('active');
    sliderItems[0].classList.remove('active');

    button2[1].classList.add('active');
    button1[1].classList.remove('active');
 });
  button1[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderItems[0].classList.add('active');
    sliderItems[1].classList.remove('active');

    button1[1].classList.add('active');
    button2[1].classList.remove('active');
  });
  button2[1].addEventListener("click", function (evt) {
    evt.preventDefault();
    sliderItems[1].classList.add('active');
    sliderItems[0].classList.remove('active');

    button2[1].classList.add('active');
    button1[1].classList.remove('active');
 });
 }
// ***************************Блок "Слайдер" END***************************
