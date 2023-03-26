const menuBtn = document.querySelector(".menuBtn");
const menu = document.querySelector(".menu");
let options = document.querySelectorAll(".option");

window.addEventListener("scroll", () => {
  const row1 = document.querySelector(".row1");
  const row2 = document.querySelector(".row2");
  const row3 = document.querySelector(".row3");
  const row4 = document.querySelector(".row4");

  const row1Position = row1.getBoundingClientRect().top;
  const row2Position = row2.getBoundingClientRect().top;
  const row3Position = row3.getBoundingClientRect().top;
  const row4Position = row4.getBoundingClientRect().top;

  if (row1Position < window.innerHeight) {
    row1.classList.add("animate");
    document.querySelector(".imgBox.second").classList.add("animate");
    document.querySelector(".imgBox.third").classList.add("animate");
  }
  if (row2Position < window.innerHeight) {
    row2.classList.add("animate");
  }
  if (row3Position < window.innerHeight) {
    row3.classList.add("animate");
    document.querySelector(".imgBox.sixth").classList.add("animate");
  }
  if (row4Position < window.innerHeight) {
    row4.classList.add("animate");
    document.querySelector(".imgBox.eighth").classList.add("animate");
  }
});

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
});

console.log(options);
for (let x = 0; x < options.length; x++) {
  options[x].addEventListener("click", function () {
    menuBtn.classList.remove("open");
    menu.classList.remove("open");
  });
}
