



const titles = document.getElementsByTagName('span')
const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            fadeInAnimation(entry);
            observer.unobserve(entry.target);
        }
    });
}, { rootMargin: '-100px 0px -100px 0px' });



// Initialise Swiper pour l'effet de carrousel

const mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
      },
    spaceBetween: 20,
    scrollbar: {
        el: '.swiper-scrollbar',
      },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


 // Variables pour le mouvement des nuages
let cloudPositionX = 0;
let isCloudMoving = false;

// Éléments pour le mouvement des nuages
const root = document.documentElement;
const locationElement = document.querySelector("#place");

//Gestion du scroll pour impacter le mouvement des nuages et la rotation des fleurs
window.addEventListener("scroll", () => {
  var vertical = -1;
    setInterval(function () {
    // Déplace les fleurs en fonction du scroll
    if (window.scrollY != vertical) {
        vertical = window.scrollY;
        root.style.setProperty("--rotate", "10s");
      }
      else {
        root.style.setProperty("--rotate", "15s");
      }
    }, 500)
  ;
  // Déplace les nuages en fonction du scroll
    cloudPositionX = Math.round(0 - (window.scrollY - locationElement.offsetTop - 200));
    if (cloudPositionX <= 0 && cloudPositionX > -400) {
      root.style.setProperty("--cloudPositionX", cloudPositionX + "px");
    }
  })
;



  