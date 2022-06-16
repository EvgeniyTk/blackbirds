const notifications = document.querySelector(".page-header__notifications");
const notificationsButton = document.querySelector(".button__notifications");

var html = document.querySelector('html');
const toggleNotifications = function () {
  notifications.classList.toggle("page-header__notifications--active");
}

notificationsButton.addEventListener("click", function () {
  toggleNotifications();
  html.addEventListener("mousedown", function(e) {
    if (!e.target.closest(".page-header__notifications--active")) {
      notifications.classList.remove("page-header__notifications--active");
    }
  });
});


