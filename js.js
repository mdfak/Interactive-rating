const ratOpt = document.querySelectorAll(".rating-option");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => e.preventDefault());

ratOpt.forEach((element) => {
  element.addEventListener("click", function () {
    // for (let i = 0; i < ratOpt.length; i++) {
    //   ratOpt[i].classList.remove("active");
    // }
    for (const el of ratOpt) {
      el.classList.remove("active");
    }
    element.classList.add("active");
  });
});
