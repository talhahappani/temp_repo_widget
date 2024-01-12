var swiper = new Swiper(".content", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 3,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 6,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
  });