import makeImageCarousel from "./makeImageCarousel.js";

const parent = document.querySelector("body");

makeImageCarousel(parent, {});

// button event listener
// document.querySelectorAll(".carousel-btn").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const nextIndexIndicator = btn.classList.contains("prev") ? -1 : 1;
//     const slides = btn.closest(".carousel").querySelector(".slides");

//     const activeSlide = slides.querySelector(".active");
//     let newIndex =
//       [...slides.children].indexOf(activeSlide) + nextIndexIndicator;
//     if (newIndex < 0) {
//       newIndex = slides.children.length - 1;
//     }
//     if (newIndex >= slides.children.length) {
//       newIndex = 0;
//     }
//     activeSlide.classList.remove("active");
//     slides.children[newIndex].classList.add("active");
//   });
// });
