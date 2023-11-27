function modulo(number, mod) {
    let result = number % mod;
    if (result < 0) {
      result += mod;
    }
    return result;
  }
  
  function setUpCarousel(carousel) {
    function handleNext() {
      currentSlide = modulo(currentSlide + 1, numSlides);
      changeSlide(currentSlide);
    }
  
    function handlePrevious() {
      currentSlide = modulo(currentSlide - 1, numSlides);
      changeSlide(currentSlide);
    }
  
    function changeSlide(slideNumber) {
      carousel.style.setProperty('--current-slide', slideNumber);
    }
  
    // get elements
    const buttonPrevious = carousel.querySelector('[data-carousel-button-previous]');
    const buttonNext = carousel.querySelector('[data-carousel-button-next]');
    const slidesContainer = carousel.querySelector('[data-carousel-slides-container]');
  
    // carousel state we need to remember
    let currentSlide = 0;
    const numSlides = slidesContainer.children.length;
  
    // set up events
    buttonPrevious.addEventListener('click', handlePrevious);
    buttonNext.addEventListener('click', handleNext);
  }
  
  const carousels = document.querySelectorAll('[data-carousel]');
  carousels.forEach(setUpCarousel);

  const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

const count = document.getElementById('inc');

let counts = setInterval(updated);
let def = 0;
function updated() {
    let count = document.getElementById("inc");
    count.innerHTML = ++def;
    if (def === 200) {
        clearInterval(counts);
    }
}