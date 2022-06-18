const notifications = document.querySelector(".page-header__notifications");
const notificationsButton = document.querySelector(".button__notifications");
const notificationsList = document.querySelectorAll(".page-header__notification");
const counter = document.querySelector(".button__notifications-count");

const toggleNotifications = function () {
  notifications.classList.toggle("page-header__notifications--active");
};

if (notificationsList.length > 0) {
  notificationsButton.classList.add("button__notifications--active");
  counter.innerHTML = notificationsList.length;
} else {
    notificationsButton.classList.remove("button__notifications--active");
  
};

if (notificationsButton.classList.contains("button__notifications--active")) {
notificationsButton.addEventListener("click", function () {
  toggleNotifications();
});
}
document.addEventListener("mousedown", function(e) {
  if (!e.target.closest(".page-header__notifications--active") && !e.target.closest(".button__notifications")) {
    notifications.classList.remove("page-header__notifications--active");
  }
});


