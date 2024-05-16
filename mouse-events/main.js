const mouseXmove = document.getElementById("mouse-x-content");
const mouseYmove = document.getElementById("mouse-y-content");

window.addEventListener("mousemove", (event) => {
  mouseXmove.innerHTML = event.clientX;
  mouseYmove.innerHTML = event.clientY;
});
