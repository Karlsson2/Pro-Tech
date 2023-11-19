const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 5,
  direction: "horizontal",
  loop: true,

  // If we need pagination

  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 480px
    450: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

let heartsArray = document.querySelectorAll(".card-heart");
heartsArray.forEach((elem) => {
  console.log("test");
  elem.addEventListener("click", () => {
    if (elem.classList.contains("visible")) {
      elem.classList.remove("visible");
      elem.classList.add("not-visible");
    } else {
      elem.classList.remove("not-visible");
      elem.classList.add("visible");
    }
  });
});

// add event listener to heart make it pretty.
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    // Räkna ut progress
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / scrollHeight) * 100;

    // Uppdatera width på pregressbaren
    document.getElementById("progress-bar").style.width = progress + "%";

    // Defined breakpoints för color & transition
    const ranges = [
      { start: 0, end: 20, color: "#DBFF4B" },
      { start: 20, end: 45, color: "#DBFF4B" },
      { start: 45, end: 74, color: "#DBFF4B" },
      { start: 74, end: 100, color: "#DBFF4B" },
    ];

    // Add color and transition based on progress range
    const letters = document.querySelectorAll(".pages h2");
    const numbers = document.querySelectorAll(".numbers h2");

    letters.forEach((letter, index) => {
      const range = ranges[index];

      if (range && progress >= range.start && progress <= range.end) {
        letter.style.transition = "color 0.3s";
        letter.style.color = range.color;
      } else {
        letter.style.transition = "color 0.3s";
        letter.style.color = "#FFF";
      }
    });

    numbers.forEach((number, index) => {
      const range = ranges[index];

      if (range && progress >= range.start && progress <= range.end) {
        number.style.transition = "color 0.3s";
        number.style.color = range.color;
      } else {
        number.style.transition = "color 0.3s";
        number.style.color = "#FFF";
      }
    });
  });
});
