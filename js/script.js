//console.log("hello world");

// Crée un observateur pour gérer l'animation
const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('title-animation')
          observer.unobserve(entry.target);

      }
  });
}, { rootMargin: '0px', threshold: 0.5 });


// Sélection des sections à animer
const sections = document.querySelectorAll('span');

// Ajout de l'observateur d'intersection à chaque section
sections.forEach((section) => {
  sectionObserver.observe(section);
});



// Variables pour le mouvement des nuages
let cloudPositionX = 0;

// Éléments pour le mouvement des nuages
const root = document.querySelector(':root');
const locationElement = document.querySelector("#place");


// Gestion du scroll pour impacter le mouvement des nuages et la rotation des fleurs
window.addEventListener("scroll", () => {
    root.style.setProperty('--speed', '0.5s')

    // Déplace les nuages en fonction du scroll
    cloudPositionX = Math.round(0 - (window.scrollY - locationElement.offsetTop - 200));
    if (cloudPositionX <= 0 && cloudPositionX > -300) {
        root.style.setProperty("--cloudPositionX", cloudPositionX + "px");
    }
});

window.addEventListener("scrollend", () => {
  root.style.setProperty('--speed', '8s')
})
  




// Initialise Swiper pour l'effet de carrousel

/*Swiper personnages*/

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
  rotate: 0,                      
  depth: 200,                     
  stretch: 0,                    
  slideShadows: false,            
  },
  autoplay: isMobile ? false : {
  delay: 2000,
  disableOnInteraction: false,
  },
  breakpoints:{
    0: {
      slidesPerView: 1,
    },
    320:{
      slidesPerView: 2,
    },
    996:{
      slidesPerView: 5,
    }
  }
});


