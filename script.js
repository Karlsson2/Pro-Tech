const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1.15,
  spaceBetween: 15,
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  // If we need pagination
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 480px

    400: {
      slidesPerView: 1.3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    450: {
      slidesPerView: 1.7,
      spaceBetween: 30,
      centeredSlides: false,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
    758: {
      slidesPerView: 2.5,
      spaceBetween: 40,
      centeredSlides: false,
    },
    // when window width is >= 640px
    980: {
      slidesPerView: 2.5,
      spaceBetween: 40,
      centeredSlides: false,
    },
  },
});

let heartsArray = document.querySelectorAll(".card-heart");
heartsArray.forEach((dropdownContent) => {
  console.log("test");
  dropdownContent.addEventListener("click", () => {
    if (dropdownContent.classList.contains("visible")) {
      dropdownContent.classList.remove("visible");
      dropdownContent.classList.add("not-visible");
    } else {
      dropdownContent.classList.remove("not-visible");
      dropdownContent.classList.add("visible");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let headerLogoVisible = true;

  window.addEventListener("scroll", function () {
    // Räkna ut progress
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const progress = (scrollTop / scrollHeight) * 100;

    // Uppdatera width på pregressbaren
    document.getElementById("progress-bar").style.width = progress + "%";

    // Hide navbar on scrolldown
    if (progress > 2) {
      // Smoothly hide the element
      document.getElementById("headerlogo").style.maxHeight = "0";
      document.getElementById("headerlogo").style.opacity = "0";
      document.getElementById("headerlogo").style.overflow = "hidden";
      document.getElementById("headerlogo").style.padding = "0px 0px 0px 0px";
      document.getElementById("sticky-nav").style.backgroundColor =
        "rgba(0, 0, 0, 0.24)";
      document.getElementById("sticky-nav").style.backdropFilter = "blur(2px)";
    } else {
      // Smoothly show the element
      document.getElementById("headerlogo").style.maxHeight = "79px"; // Set the maximum height to your desired value
      document.getElementById("headerlogo").style.opacity = "1";
      document.getElementById("headerlogo").style.overflow = "visible";
      document.getElementById("sticky-nav").style.opacity = "1";
      document.getElementById("headerlogo").style.padding =
        "24px 24px 0px 24px";
    }

    if (progress > 2 && window.innerWidth > 1250) {
      document.getElementById("headerlogo").style.maxHeight = "0";
      document.getElementById("headerlogo").style.opacity = "0";
      document.getElementById("headerlogo").style.overflow = "hidden";
      document.getElementById("sticky-nav").style.backgroundColor =
        "rgba(0, 0, 0, 0.24)";
      document.getElementById("sticky-nav").style.backdropFilter = "blur(2px)";
    } else if (progress < 2 && this.window.innerWidth > 1250) {
      // Smoothly show the element
      document.getElementById("headerlogo").style.maxHeight = "79px"; // Set the maximum height to your desired value
      document.getElementById("headerlogo").style.opacity = "1";
      document.getElementById("headerlogo").style.overflow = "visible";
      document.getElementById("headerlogo").style.padding = "0";
      document.getElementById("sticky-nav").style.opacity = "1";
    }
    // Defined breakpoints för color & transition
    const ranges = [
      { start: 0, end: 14, color: "#DBFF4B" },
      { start: 14, end: 70, color: "#DBFF4B" },
      { start: 70, end: 85, color: "#DBFF4B" },
      { start: 85, end: 101, color: "#DBFF4B" },
    ];

    // Add color and transition based on progress range
    const letters = document.querySelectorAll(".pages h2");
    const numbers = document.querySelectorAll(".numbers h2");
    console.log(letters);

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

//language select on mobile
var footerHeader = document.getElementById("footer-header");
var dropdownContent = document.getElementById("languageDropdown");
var arrow = document.getElementById("dropdownArrow");
footerHeader.addEventListener("click", () => {
  if (dropdownContent.classList.contains("visible")) {
    dropdownContent.classList.remove("visible");
    dropdownContent.classList.add("not-visible");
    arrow.classList.add("down");
    arrow.classList.remove("up");
  } else {
    dropdownContent.classList.remove("not-visible");
    dropdownContent.classList.add("visible");
    arrow.classList.add("up");
    arrow.classList.remove("down");
  }
});

// language select on desktop

var desktopLanguage = document.getElementById("desktop-language");
console.log(desktopLanguage);
var dropdownContentDesktop = document.getElementById(
  "dropdown-content-desktop"
);
console.log(dropdownContentDesktop);
var arrowDesktop = document.getElementById("dropdown-arrow-desktop");
desktopLanguage.addEventListener("click", () => {
  if (dropdownContentDesktop.classList.contains("visible")) {
    dropdownContentDesktop.classList.remove("visible");
    dropdownContentDesktop.classList.add("not-visible");
    arrowDesktop.classList.add("down");
    arrowDesktop.classList.remove("up");
    desktopLanguage.classList.remove("darkest");
  } else {
    dropdownContentDesktop.classList.remove("not-visible");
    dropdownContentDesktop.classList.add("visible");
    arrowDesktop.classList.add("up");
    arrowDesktop.classList.remove("down");
    desktopLanguage.classList.add("darkest");
  }
});
