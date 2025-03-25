const row = document.querySelector(".row");
const columns = Array.from(document.querySelectorAll(".column"));
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

// Check if on Mobile
if (window.innerWidth <= 480) {
  let isDown = false;
  let startX;
  let scrollLeft;

  row.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - row.offsetLeft;
    scrollLeft = row.scrollLeft;
  });

  row.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - row.offsetLeft;
    const walk = (startX - x) * 1.5; // Faster scroll
    row.scrollLeft = scrollLeft + walk;
  });

  row.addEventListener("touchend", () => {
    isDown = false;
  });
} else {
  const nextSlide = function () {
    prevButton.classList.remove("hidden");

    let activeSlides = columns.filter(
      (slide) => !slide.classList.contains("hidden")
    );

    let lastActiveSlide = activeSlides[0];

    let lastEl = +activeSlides[activeSlides.length - 1].dataset.id + 1;
    let newActiveSlide = columns[lastEl];
    console.log(newActiveSlide);
    if (newActiveSlide != undefined) {
      lastActiveSlide.classList.add("hidden", "slide-out");

      // Making new slide visible
      newActiveSlide.classList.remove("hidden");

      // Adding slide in animation for new slide
      newActiveSlide.classList.add("slide-in");
    } else {
      nextButton.classList.add("hidden");
    }
  };

  const prevSlide = function () {
    nextButton.classList.remove("hidden");

    let activeSlides = columns.filter(
      (slide) => !slide.classList.contains("hidden")
    );
    let lastActiveSlide = activeSlides[activeSlides.length - 1];
    let lastEl = +activeSlides[0].dataset.id - 1;
    console.log(lastEl);
    // let newActiveSlide = columns[lastEl % columns.length];
    let newActiveSlide = columns[lastEl];

    if (newActiveSlide !== undefined) {
      newActiveSlide.classList.remove("hidden");

      newActiveSlide.classList.remove("slide-out");
      newActiveSlide.classList.add("slide-in-left");

      console.log(lastEl);
      lastActiveSlide.classList.add("hidden");
    } else {
      prevButton.classList.add("hidden");
    }
  };

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);
}
