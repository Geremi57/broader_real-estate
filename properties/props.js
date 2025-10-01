const searchTypeBtn = document.querySelectorAll(".search_type_btn");

// console.log(searchTypeBtn);
searchTypeBtn.forEach((search_btn) => {
  search_btn.addEventListener("click", () => {
    // console.log("fiesttaaa");
    searchTypeBtn.forEach((btn) => btn.classList.remove("active"));
    search_btn.classList.add("active");
  });
});

document.addEventListener('DOMContentLoaded', () => {

    let tabsBtn = document.querySelectorAll(".featured_properties_menu_list li button")
    
    let tabs = document.querySelectorAll(".featured_tab")

    tabsBtn.forEach((tabBtn) => {
      tabBtn.addEventListener("click", () => {
    console.log("fiesttaaa");
    tabsBtn.forEach((btn) => btn.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));

    document.getElementById(tabBtn.dataset.tab).classList.add("active")
    tabBtn.classList.add("active");
  });
});

})

 var swiper = new Swiper(".citiesSwiper", {
      spaceBetween: 30,
      // centeredSlides: true,
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
       breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    });
