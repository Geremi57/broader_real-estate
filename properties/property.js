let swiper; // keep a reference globally

async function loadProperty() {
  const params = new URLSearchParams(window.location.search);
  const link = params.get('link');
  if (!link) {
    document.body.innerHTML = "<h2>Property not found.</h2>";
    return;
  }

  const response = await fetch(`http://localhost:8080/api/properties/${link}`);
  const property = await response.json();

   document.getElementById("property-title").textContent = property.title;
  document.querySelector("#property-location").textContent = property.location;
  document.querySelector(".property-price").textContent = `Ksh ${property.price.toLocaleString()}M`;
  document.querySelector(".description").textContent = property.description;


  const wrapper = document.querySelector(".swiper-wrapper");
  wrapper.innerHTML = "";

  (property.slides || []).forEach((img) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    slide.classList.add("property-image")
    slide.innerHTML = `<img src="../${img}" alt="Property Image">`;
    wrapper.appendChild(slide);
  });

  if (swiper) swiper.destroy(true, true); 
  swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 10);
});

let menu = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  console.log(menu.classList);
  navbar.classList.toggle("open");
};




loadProperty();
