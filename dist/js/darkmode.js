//Dark mode
const chk = document.getElementById("chk");

chk.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.classList("dark").toggle("dark");
  let div = document.classList("divbg-1");
  div.style.backgroundColor = "#333";
  let element = document.classList("hthree");
  element.style.color = "#fff";
  document.classList("btn-dark").style.background = "white";
});
