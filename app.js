const button = document.querySelector("#mainButon");
const notifications = document.querySelector("#notifications");

const messages = ["Message 1", "Message 2", "Message 3", "Message 4"];

const types = ["info", "warning", "error"];

const randomFunction = () => {
  const notificationButon = document.createElement("button");
  notificationButon.classList.add("notificationButon");
  notificationButon.classList.add(types[Math.floor(Math.random() * 3)])
  notificationButon.textContent = messages[Math.floor(Math.random() * 4)]

  notifications.append(notificationButon)

  setTimeout(() => {
    notificationButon.remove()
  }, 3000);
};

button.addEventListener("click", randomFunction);