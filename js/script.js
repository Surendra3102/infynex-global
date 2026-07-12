//===============================
// Scroll Animation
//===============================

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".fade-up").forEach(el=>{

observer.observe(el);

});


//==========================
// Sticky Navbar
//==========================

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

header.classList.toggle("sticky",window.scrollY>80);

});


//==========================
// Mobile Menu
//==========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// Toggle Menu
menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

// Close menu after clicking any link
navItems.forEach(item => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

//=============================
// Testimonials Slider
//=============================

new Swiper(".testimonial-slider",{

loop:true,

spaceBetween:30,

grabCursor:true,

autoplay:{

delay:3500,

disableOnInteraction:false

},

pagination:{

el:".swiper-pagination",

clickable:true

},

navigation:{

nextEl:".swiper-button-next",

prevEl:".swiper-button-prev"

},

breakpoints:{

0:{

slidesPerView:1

},

768:{

slidesPerView:2

},

1200:{

slidesPerView:3

}

}

});


//==============================
// Scroll To Top
//==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});