const popup = document.querySelector(".popup-auth");
const authButton = document.querySelector(".button__auth");
const popupWrapper = document.querySelector('.popup-auth__wrapper');
const popupRegister = document.querySelector('.popup-auth__form-register');
const popupLogin = document.querySelector('.popup-auth__form-login');
const buttonLogin = document.querySelector(".popup-auth__button-top-login");
const buttonRegister = document.querySelector(".popup-auth__button-top-register");
const buttonClose = document.querySelector(".popup-auth__close");

const togglePopup = function () {
  popup.classList.toggle("popup-auth--active");
}

buttonClose.addEventListener("click", function() {
  togglePopup();
});

authButton.addEventListener("click", function () {
  togglePopup();
  document.addEventListener("mousedown", function(e) {
    if (!e.target.closest(".popup-auth__wrapper")) {
      popup.classList.remove("popup-auth--active");
    }
  });
});


buttonLogin.addEventListener("click", function() {
  popupRegister.classList.remove("popup-auth__form--active");
  popupLogin.classList.add("popup-auth__form--active");
});
buttonRegister.addEventListener("click", function() {
  popupLogin.classList.remove("popup-auth__form--active");
  popupRegister.classList.add("popup-auth__form--active");
});