let a = document.getElementById("A");
let b = document.getElementById("B");
let btns = document.querySelectorAll("button");
btns[0].addEventListener("click", () => {
  a.textContent = parseInt(a.textContent) + 1;
});
btns[2].addEventListener("click", () => {
  b.textContent = parseInt(b.textContent) + 1;
});
btns[1].addEventListener("click", () => {
  a.textContent = 0;
  b.textContent = 0;
});
