// Menu animation

const btnMenu = document.querySelector(".logo-menu");
const menu = document.querySelector(".list-nav");

btnMenu.addEventListener ("click", function() {
menu.classList.toggle('active')
})

const allLinks = document.querySelectorAll(".item-nav");

allLinks.forEach(item => {
    item.addEventListener ("click", function() {
        menu.classList.toggle('active');
    }) 
})

// Greensock animation

gsap.timeline({
    scrollTrigger: {
      trigger: ".section-asymetrique",
      start: "top bottom",
      end: "bottom center",
      scrub: true,
    }
  })

.from(".img-grid-1", {duration: 2.5, ease:"power3.out", x: 1400})
.from(".img-grid-2", {duration: 2.5, ease:"power3.out", x: -1420})
.from(".img-grid-3", {duration: 2.5, ease:"power3.out", x: 1000})
