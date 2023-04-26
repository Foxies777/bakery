// filter start 
let category = document.querySelectorAll(".a");
let card = document.querySelectorAll(".card");

category.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        category.forEach((el1)=>{
            el1.style.color = "#e6e6e6";
        })
        e.target.style.color = "#714314"
        card.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "flex";
        })
    })
})
// filter end

// slaider start 
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true', fade:'true',
    grabCursor:'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      0:{
        slidesPerView: 1,
      },
      520:{
        slidesPerView: 2,
      },
      950:{
        slidesPerView: 3,
      }, 
    },
  });

// slaider end 


// dropdown start 
let dropDownMenu = document.querySelector('.dropdown_menu');
let openMenuBtn = document.querySelector('.toggle_btn');
let closeMenuBtn = document.querySelector('.close');


openMenuBtn.addEventListener("click", () =>{
    dropDownMenu.style.left ="0";
});
closeMenuBtn.addEventListener("click",()=>{
    dropDownMenu.style.left="-110%";
});

// dropdown end 


// переключатель темы
const btn_noch =document.querySelector(".btn-noch");
btn_noch.addEventListener("click",()=>{
  document.body.classList.add("dark-theme");
});
const btn_svet =document.querySelector(".btn-svet");
btn_svet.addEventListener("click",()=>{
  document.body.classList.remove("dark-theme");
});


// модальное окно
