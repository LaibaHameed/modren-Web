let circle = document.querySelector(".mouse");
window.addEventListener("mousemove", (details) => {
  let xValue = details.clientX;
  let yValue = details.clientY;

  setTimeout(() => {
    circle.style.left = `${xValue}px`;
    circle.style.top = `${yValue}px`;
  }, 70);
});