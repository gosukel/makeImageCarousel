export default function makeImageCarousel(parent, obj) {
  // template for obj
  const testObj = {
    buttons: [
      {
        className: "prev",
        btnText: "&#10229;",
      },
      {
        className: "next",
        btnText: "&#10230;",
      },
    ],
    images: [
      {
        src: "https://source.unsplash.com/a-wooden-walkway-leading-to-a-beach-with-palm-trees-C5jTj4BRJ3g",
        alt: "travel image one",
      },
      {
        src: "https://source.unsplash.com/a-tall-pagoda-sitting-on-top-of-a-lake-next-to-a-forest-4uLNmiiv8-c",
        alt: "travel image two",
      },
      {
        src: "https://source.unsplash.com/a-large-clock-tower-towering-over-a-city-at-night-w7GyZ_9JK6c",
        alt: "travel image three",
      },
      {
        src: "https://source.unsplash.com/a-tall-pagoda-with-a-mountain-in-the-background-gAwlVj_hWik",
        alt: "travel image four",
      },
    ],
  };
  // use testObj of obj not provided
  let createdObj = obj.length ? obj : testObj;

  // create container section
  const parentSection = document.createElement("section");
  parentSection.setAttribute("aria-label", "newest photos");
  parent.appendChild(parentSection);

  // create carousel div
  const carouselDiv = document.createElement("div");
  carouselDiv.classList.add("carousel");
  parentSection.appendChild(carouselDiv);

  // create buttons
  const btnsArr = [];
  createdObj.buttons.forEach((btn) => {
    let newBtn = document.createElement("button");
    newBtn.classList.add("carousel-btn", `${btn.className}`);
    newBtn.innerHTML = btn.btnText;
    btnsArr.push(newBtn);
    carouselDiv.appendChild(newBtn);
  });

  // create ul
  const slidesUl = document.createElement("ul");
  slidesUl.classList.add("slides");
  carouselDiv.appendChild(slidesUl);

  // create images
  createdObj.images.forEach((img) => {
    let newImgLi = document.createElement("li");
    newImgLi.classList.add("slide");
    if (createdObj.images.indexOf(img) === 0) {
      newImgLi.classList.add("active");
    }
    slidesUl.appendChild(newImgLi);

    let newImg = document.createElement("img");
    newImg.setAttribute("src", `${img.src}`);
    newImg.setAttribute("alt", `${img.alt}`);
    newImgLi.appendChild(newImg);
  });

  // add button click event listeners
  btnsArr.forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextIndexIndicator = btn.classList.contains("prev") ? -1 : 1;
      const slides = btn.closest(".carousel").querySelector(".slides");

      const activeSlide = slides.querySelector(".active");
      let newIndex =
        [...slides.children].indexOf(activeSlide) + nextIndexIndicator;
      if (newIndex < 0) {
        newIndex = slides.children.length - 1;
      }
      if (newIndex >= slides.children.length) {
        newIndex = 0;
      }
      activeSlide.classList.remove("active");
      slides.children[newIndex].classList.add("active");
    });
  });
}
