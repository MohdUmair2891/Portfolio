burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')



burger.addEventListener('click', ()=>{
  // navbar.classList.toggle('v-class-resp')
  navList.classList.toggle('v-class-resp')
  navbar.classList.toggle('h-nav-resp')
})

Shery.mouseFollower();
Shery.makeMagnet("#logonav,.mag"); 
Shery.makeMagnet(".logo-div"); 
Shery.makeMagnet(".magnet"); 
Shery.makeMagnet(".copyright"); 
Shery.makeMagnet(".heading,.title"); 

gsap.from("#logonav, .mag", {
  x: 1700,
  duration: 2,
  stagger: 0.1
})

gsap.from(".left-div h1, #devimg", {
  y: 100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.5
})

gsap.from("#sec2", {
  scale: 0,
  duration: 1,
  delay: 2
})

gsap.from("#projects, #iconsk", {
  y: -100,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: true,
  scrollTrigger:{
    trigger: "#skills, #iconsk",
    scroller: "body"
  }
})
