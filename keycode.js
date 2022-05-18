const keycodeElement = document.querySelector(".keycode-content");

document.addEventListener("keydown", (event) => {
  keycodeElement.innerHTML = `Clicked keyboard key is: <b>${event.key}</b> and the code is <b>${event.code}</b>`;
});
