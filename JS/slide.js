// Slider - Agility Star 
const left = document.querySelector('.left');
const right = document.querySelector('.right');

const slider = document.querySelector('.slider-content');

const indicatorParent = document.querySelector('.circles'); 
const indicators = document.querySelectorAll('.circles li');
index = 0;

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    document.querySelector('.circles .selected').classList.remove('selected');
    indicator.classList.add('selected');
    slider.style.transform = 'translateX(' + (i) * -33.5 + '%)';  
    index = i;
    
  });
});

left.addEventListener('click', function() {
  index = (index > 0) ? index -1 : 0;
  document.querySelector('.circles .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -33.5 + '%)';
});

right.addEventListener('click', function() {
  index = (index < 3 - 1) ? index+1 : 2;
  document.querySelector('.circles .selected').classList.remove('selected');
  indicatorParent.children[index].classList.add('selected');
  slider.style.transform = 'translateX(' + (index) * -33.5 + '%)';
});