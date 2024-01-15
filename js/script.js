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


// Menu Burger

document.addEventListener('DOMContentLoaded', function () {
  // Sélection des éléments bouton du menu burger et menu fullscreen
  const menuBurger = document.querySelector('.burgerBtn');
  const fullscreenMenu = document.querySelector('.fullscreenMenu');

  // Ajout d'un écouteur d'événement click au bouton de menu burger
  menuBurger.addEventListener('click', function () {
      // Ajout de la classe 'active' pour animer le bouton de menu burger
      menuBurger.classList.toggle('active');

      // Ajout de la classe 'open' pour afficher ou masquer le menu fullscreen
      fullscreenMenu.classList.toggle('open');
  });
});


// Apparition lien menu 

document.addEventListener('DOMContentLoaded', function () {
  const menuBurger = document.querySelector('.burgerBtn');
  const fullscreenMenu = document.querySelector('.fullscreenMenu');

  menuBurger.addEventListener('click', function () {
      // Sélection des éléments menu fullscreen et tous les liens du menu
      const menuLinks = fullscreenMenu.querySelectorAll('ul li a');

      // Ajout de la classe 'titleAnimation' à chaque lien du menu
      menuLinks.forEach((link) => {
          link.classList.add('titleAnimation');
      });

      // Déclenchement de l'animation avec un délai
      setTimeout(() => {
          menuLinks.forEach((link, index) => {
              const delay = index === 0 ? 400 : index * 600;

              // Ajout de la classe 'visibility' avec le délai spécifié
              setTimeout(() => {
                  link.classList.add('visibility');
              }, delay);
          });
      }, 150);
  });
});


