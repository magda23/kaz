var swiper = new Swiper(".s1", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".s2", {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper(".s3", {
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".s4", {
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const darkMode = document.querySelector(".dark_mode");
const lightMode = document.querySelector(".light_mode");

if (lightMode) {
  function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();

    if (hrs < 10) {
      hrs = "0" + hrs;
    }

    if (mins < 10) {
      mins = "0" + mins;
    }

    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
  }
  setInterval(displayTime, 10);
}

if (darkMode) {
  function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var mins = dateTime.getMinutes();

    if (hrs < 10) {
      hrs = "0" + hrs;
    }

    if (mins < 10) {
      mins = "0" + mins;
    }

    document.getElementById("hours_1").innerHTML = hrs;
    document.getElementById("minutes_1").innerHTML = mins;
  }
  setInterval(displayTime, 10);
}
