//                dark mode
const dark_mode = document.querySelector("#dark_mode");
const body = document.querySelector("body");

dark_mode.addEventListener("click", function () {
  body.classList.toggle("dark");
});

//                   nav_shrink
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//                   responsible

const menu = document.querySelector(".hampur");
const toggle_menu = document.querySelector("#toggler");
const cenel = document.querySelector("#close");

toggle_menu.addEventListener("click", function () {
  menu.classList.toggle("show");
});

cenel.addEventListener("click", function () {
  menu.classList.toggle("show");
});

//                  modal home
const openModal = document.querySelector("#modal_open");
const closeModal = document.querySelector(".modal_close");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", function () {
  modal.classList.add("active");
});
closeModal.addEventListener("click", function () {
  modal.classList.remove("active");
});

//                    services

const obj = [
  {
    imag: "../image/service/image.png",
    title: "What I can do for you",
    text: "Faster, better products that your users love. Here's all the services I provide:",
    fist: "Design Strategy",
    second: "Design Web and Mobile App Design",
    third: "Front-end Development",
  },
  {
    imag: "../image/service/image.png",
    title: "What I can do for you",
    text: "Faster, better products that your users love. Here's all the services I provide:",
    fist: "Design Strategy",
    second: "Design Web and Mobile App Design",
    third: "Front-end Development",
  },
  {
    imag: "../image/service/image.png",
    title: "What I can do for you",
    text: "Faster, better products that your users love. Here's all the services I provide:",
    fist: "Design Strategy",
    second: "Design Web and Mobile App Design",
    third: "Front-end Development",
  },
];

let product_item = document.querySelector(".card");
function GetCard(image, title, text, fist, second, third) {
  return `<div class="cards_item">
      <img src="${image}" alt="" />
      <h4 class="card_title">${title}</h4>
      <p>
       ${text}
      </p>
      <ul>
        <li>${fist}</li>
        <li>${second}</li>
        <li>${third}</li>
      </ul>
    </div>
  `;
}

function getproduct(obj) {
  product_item.innerHTML = "";
  for (el of obj) {
    product_item.innerHTML += GetCard(
      el.imag,
      el.title,
      el.text,
      el.fist,
      el.second,
      el.third
    );
  }
}
getproduct(obj);

//                         carucel

const carousel = document.querySelector(".carousel");
const carouselAllItems = document.querySelectorAll(".carousel-item");
const carouselItems = document.querySelector(".carousel-items");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

let slideLength = 4;

if (innerWidth < 1200) {
  slideLength = 3;
}

if (innerWidth < 900) {
  slideLength = 2;
}

if (innerWidth < 500) {
  slideLength = 1;
}

const carouselItemsLength = carouselAllItems.length; // the number of carousel items

const carouselItemWidth = carousel.offsetWidth / slideLength; // carousel-item width
carouselItems.style.width = carouselItemsLength * carouselItemWidth + "px"; // total width of carousel-items

for (let i = 0; i < carouselItemsLength; i++) {
  carouselAllItems[i].style.width = carouselItemWidth + "px"; // set width for every carousel-item
}

const stepLength = 1;
const stepWidth = stepLength * carouselItemWidth;

let currentPosition = 0;
let lastPosition = (carouselItemsLength - slideLength) * carouselItemWidth;

prevBtn.addEventListener("click", function () {
  currentPosition -= stepWidth;
  if (Math.ceil(currentPosition) < 0) {
    currentPosition = lastPosition;
  }
  carouselItems.style.transform = `translateX(${-currentPosition}px)`;
});

nextBtn.addEventListener("click", function () {
  currentPosition += stepWidth;
  if (Math.floor(currentPosition) > lastPosition) {
    currentPosition = 0;
  }
  carouselItems.style.transform = `translateX(${-currentPosition}px)`;
});

//                                 about

const main = document.querySelector(".imges");
const img = document.querySelector(".main_img img");

main.addEventListener("click", function (event) {
  event.target.src && (img.src = event.target.src);
});

//                                    test
const item = document.querySelectorAll(".carusel_item2");
counter = 0;

item.forEach((item, index) => {
  item.style.left = `${index * 100}%`;
});

const items2 = () => {
  slides.forEach((slide) => {
    item.style.transform = `transalteX (-${counter * 100}%)`;
  });
};
