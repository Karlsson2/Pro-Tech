
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

document.addEventListener('DOMContentLoaded', function() {

    let headerLogoVisible = true;

    window.addEventListener('scroll', function() {
        // Räkna ut progress
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const progress = (scrollTop / scrollHeight) * 100;

        // Uppdatera width på pregressbaren
        document.getElementById('progress-bar').style.width = progress + '%';

        // Hide navbar on scrolldown
        if (progress > 2) {
            // Smoothly hide the element
            document.getElementById('headerlogo').style.maxHeight = '0';
            document.getElementById('headerlogo').style.opacity = '0';
            document.getElementById('headerlogo').style.overflow = 'hidden';
            document.getElementById('headerlogo').style.padding = '0px 0px 0px 0px';
            document.getElementById('sticky-nav').style.backgroundColor = 'rgba(0, 0, 0, 0.24)';
            document.getElementById('sticky-nav').style.backdropFilter = 'blur(2px)';
        } else {
            // Smoothly show the element
            document.getElementById('headerlogo').style.maxHeight = '79px'; // Set the maximum height to your desired value
            document.getElementById('headerlogo').style.opacity = '1';
            document.getElementById('headerlogo').style.overflow = 'visible';
            document.getElementById('sticky-nav').style.opacity = '1';
            document.getElementById('headerlogo').style.padding = '24px 24px 0px 24px';
        }

        if (progress > 2 && window.innerWidth > 1250) {
            document.getElementById('headerlogo').style.maxHeight = '0';
            document.getElementById('headerlogo').style.opacity = '0';
            document.getElementById('headerlogo').style.overflow = 'hidden';
            document.getElementById('sticky-nav').style.backgroundColor = 'rgba(0, 0, 0, 0.24)';
            document.getElementById('sticky-nav').style.backdropFilter = 'blur(2px)';

        } else if (progress < 2 && this.window.innerWidth > 1250) {
            // Smoothly show the element
            document.getElementById('headerlogo').style.maxHeight = '79px'; // Set the maximum height to your desired value
            document.getElementById('headerlogo').style.opacity = '1';
            document.getElementById('headerlogo').style.overflow = 'visible';
            document.getElementById('headerlogo').style.padding = '0';
            document.getElementById('sticky-nav').style.opacity = '1';
        }
        // Defined breakpoints för color & transition
        const ranges = [
            { start: 0, end: 20, color: '#DBFF4B' },
            { start: 20, end: 45, color: '#DBFF4B' },
            { start: 45, end: 74, color: '#DBFF4B' },
            { start: 74, end: 100, color: '#DBFF4B' },
        ];

        // Add color and transition based on progress range
        const letters = document.querySelectorAll('.pages h2');
        const numbers = document.querySelectorAll('.numbers h2');
        console.log(letters);

        letters.forEach((letter, index) => {
            const range = ranges[index];

            if (range && progress >= range.start && progress <= range.end) {
                letter.style.transition = 'color 0.3s'; 
                letter.style.color = range.color;
            } else {
                letter.style.transition = 'color 0.3s'; 
                letter.style.color = '#FFF';
            }
        });

        numbers.forEach((number, index) => {
            const range = ranges[index];

            if (range && progress >= range.start && progress <= range.end) {
                number.style.transition = 'color 0.3s'; 
                number.style.color = range.color;
            } else {
                number.style.transition = 'color 0.3s'; 
                number.style.color = '#FFF';
            }
        });
    });
  });
