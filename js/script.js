
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