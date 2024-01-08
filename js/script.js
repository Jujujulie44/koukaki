
const bigCloud = document.getElementById("big_cloud")
const littleCloud = document.getElementById("little_cloud")

  // décalage des nuages aux sroll  
window.addEventListener('scroll', () => {
  const decalage = window.scrollY
  let decalageCloud = decalage /10
  bigCloud.style.transform = 'translateX(' + (decalageCloud + -300) + 'px)';

  let decalageLittleCloud = decalage /10
  littleCloud.style.transform = 'translateX(' + (decalageLittleCloud + -300) + 'px)'
    
})


const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            fadeInAnimation(entry);
            observer.unobserve(entry.target);
        }
    });
}, { rootMargin: '-100px 0px -100px 0px' });


// Initialise Swiper pour l'effet de carrousel
var mySwiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
      },
    spaceBetween: 20,
    })
  ;
  