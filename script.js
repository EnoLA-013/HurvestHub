let searchForm = document.querySelector(".search_form");

document.querySelector("#search_btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  menuBar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping_cart");

document.querySelector("#cart_btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  menuBar.classList.remove("active");
};

let loginForm = document.querySelector(".login_form");

document.querySelector("#login_btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  menuBar.classList.remove("active");
};

let menuBar = document.querySelector(".navbar");

document.querySelector("#menu_btn").onclick = () => {
  menuBar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  menuBar.classList.remove("active");
};

//swiper slider

var swiper = new Swiper(".product_slider", {
  loop:true,
  spaceBetween: 20,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});



var swiper = new Swiper(".review_slider", {
  loop:true,
  spaceBetween: 20,

  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      
    },
    1020: {
      slidesPerView: 3,
      
    },
  },
});
