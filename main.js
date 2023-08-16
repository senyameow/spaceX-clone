const btn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay')
const here = document.getElementById('mobile-menu')
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

function navToggle(){
    btn.classList.toggle('open')
    overlay.classList.toggle('show')
    document.body.classList.toggle('stop-scrolling')
    here.classList.toggle('here')
}

btn.addEventListener('click', navToggle)
document.addEventListener('scroll', scrollPage);

function scrollPage() {
    const scrollPos = window.scrollY;
  
    if (scrollPos > 100 && !scrollStarted) {
      countUp();
      scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
      reset();
      scrollStarted = false;
    }
  }

  function countUp() {
    counters.forEach((counter) => {
      counter.innerText = '0';
  
      const updateCounter = () => {
        // Get count target
        const target = +counter.getAttribute('data-target');
        // Get current counter value
        const c = +counter.innerText;
  
        // Create an increment
        const increment = target / 100;
  
        // If counter is less than target, add increment
        if (c < target) {
          // Round up and set counter value
          counter.innerText = `${Math.ceil(c + increment)}`;
  
          setTimeout(updateCounter, 75);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCounter();
    });
  }
  
  function reset() {
    counters.forEach((counter) => (counter.innerHTML = '0'));
  }