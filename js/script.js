
    const swiper = new Swiper('.banner', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // If we need pagination
      pagination: {
        el: '.banner__pagination',
      },
      // Navigation arrows
      navigation: {
        nextEl: '.banner-button-next',
        prevEl: '.banner-button-prev',
      },
    });


    const swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 30,
      cssMode: true,
      pagination: {
        el: false,
        // clickable: true,
      },
      navigation: {
          nextEl: '.bestsellers-button-next',
          prevEl: '.bestsellers-button-prev',
        },
        mousewheel: true,
        keyboard: true,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          415: {
            slidesPerView: 3,
            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1200: { 
            slidesPerView: 5,
            spaceBetween: 30
          }
        }
    });

    const swiper3 = new Swiper('.mySwiper3', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      rewind: true,
      nested:true,
      // If we need pagination
      pagination: {
        el: '.bestsellers__pagination',
      },
    });

    const swiper4 = new Swiper('.mySwiper4', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.new-button-next',
        prevEl: '.new-button-prev',
      },
    });

    const swiper5 = new Swiper('.mySwiper5', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.new-button-next',
        prevEl: '.new-button-prev',
      },
      pagination: {
      el: '.new__pagination',
    },
    });
   
    const body = document.querySelector('.js-body');
    const nav = document.querySelector('.js-nav');
    const burger = document.querySelector('.js-burger');

    burger.addEventListener('click', ()=>{  
    burger.classList.toggle('burger--active');
    nav.classList.toggle('header__nav--active');
    body.classList.toggle('body--lock');
    });


    const link = document.querySelector('.js-link');
    const submenu = document.querySelector('.js-submenu');
    const close = document.querySelector('.js-close');

    link.addEventListener('click', ()=>{  
    submenu.classList.add('submenu1--active');
    close.classList.add('burger--active');
    });
    close.addEventListener('click', ()=>{  
    submenu.classList.remove('submenu1--active');
    });


    const headerIconCart = document.querySelector('.js-header__icon-cart');
    const cart = document.querySelector('.js-cart');
    const cartClose = document.querySelector('.js-cart__close');

    headerIconCart.addEventListener('click', ()=>{  
    cart.classList.add('cart__container--active');
    cartClose.classList.add('cart__close--active');
    });
    cartClose.addEventListener('click', ()=>{  
    cart.classList.remove('cart__container--active');
    });

    const swiper6 = new Swiper(".mySwiper6", {
        spaceBetween: 17,
        cssMode: true,
        pagination: {
        el: false,
        // clickable: true,
        },
        navigation: {
            nextEl: '.bestsellers-button-next',
            prevEl: '.bestsellers-button-prev',
        },
        mousewheel: true,
        keyboard: true,
        slidesPerView: 2,
    });


    var swiper9 = new Swiper(".mySwiper9", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        },
        pagination: {
        el: ".swiper-pagination",
        },
    });

    var acc = document.getElementsByClassName("accordion__btn");
    var i;
    
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
        });
    }