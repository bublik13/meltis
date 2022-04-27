
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

    const mobileLink = document.querySelector('.js-mobile-link');
    const mobileSubmenu = document.querySelector('.js-mobile-submenu');
    const back = document.querySelector('.js-back');

    mobileLink.addEventListener('click', ()=>{  
    mobileSubmenu.classList.add('submenu1--active');
    back.classList.add('burger--active');
    });
    back.addEventListener('click', ()=>{  
    mobileSubmenu.classList.remove('submenu1--active');
    });


    const search = document.querySelector('.js-search');
    const searchImg = document.querySelector('.js-search-img');
    const input = document.querySelector('.js-input');
    const searchClose = document.querySelector('.js-search-close');

    search.addEventListener('click', ()=>{  
    searchImg.classList.add('search--active');
    input.classList.add('search__input--active');
    searchClose.classList.add('search__close--active');
    });
    searchClose.addEventListener('click', ()=>{
      input.classList.add('search__input-none--active');
      searchImg.classList.add('search-relative--active');
      searchClose.classList.add('search__close-none--active');

    });

    const headerIconCart = document.querySelector('.js-header__icon-cart');
    const cart = document.querySelector('.js-cart');
    const cartClose = document.querySelector('.js-cart__close');
    const footerIconCart = document.querySelector('.js-footer_control__item');

    headerIconCart.addEventListener('click', ()=>{  
    cart.classList.add('cart__container--active');
    cartClose.classList.add('cart__close--active');
    });
    cartClose.addEventListener('click', ()=>{  
    cart.classList.remove('cart__container--active');
    });
    footerIconCart.addEventListener('click', ()=>{  
    cart.classList.add('cart__container--active');
    cartClose.classList.add('cart__close--active');
    });
    cartClose.addEventListener('click', ()=>{  
    cart.classList.remove('cart__container--active');
    });


    const title = document.querySelector('.js-title');
    const filters = document.querySelector('.js-filters');
    const filtersClose = document.querySelector('.js-filters-close');
    title.addEventListener('click', ()=>{  
    filters.classList.add('filters--active');
    filtersClose.classList.add('filters-close--active');
    });
    filtersClose.addEventListener('click', ()=>{  
    filters.classList.remove('filters--active');
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

    $(".polzunok-5").slider({
        min: 0,
        max: 99999,
        values: [2000, 3000],
        range: true,
        animate: "fast",
        slide : function(event, ui) {    
            $(".polzunok-input-5-left").val(ui.values[ 0 ]);   
            $(".polzunok-input-5-right").val(ui.values[ 1 ]);  
        }    
    });
    $(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
    $(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
    $(".polzunok-container-5 input").change(function() {
        var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
        opt_left = $(".polzunok-5").slider("option", "min"),
        where_right = $(".polzunok-5").slider("values", 1),
        input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
        opt_right = $(".polzunok-5").slider("option", "max"),
        where_left = $(".polzunok-5").slider("values", 0); 
        if (input_left > where_right) { 
            input_left = where_right; 
        }
        if (input_left < opt_left) {
            input_left = opt_left; 
        }
        if (input_left == "") {
        input_left = 0;    
        }        
        if (input_right < where_left) { 
            input_right = where_left; 
        }
        if (input_right > opt_right) {
            input_right = opt_right; 
        }
        if (input_right == "") {
        input_right = 0;    
        }    
        $(".polzunok-input-5-left").val(input_left); 
        $(".polzunok-input-5-right").val(input_right); 
        if (input_left != where_left) {
            $(".polzunok-5").slider("values", 0, input_left);
        }
        if (input_right != where_right) {
            $(".polzunok-5").slider("values", 1, input_right);
        }
    });
