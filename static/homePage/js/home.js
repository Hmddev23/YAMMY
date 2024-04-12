
/*
=======
HOME JS
=======
*/

/* const carousel = document.querySelector('.carousel');
const arrowIcons = document.querySelectorAll('.arrowIcon');
const firstImg = carousel.querySelectorAll('img')[0];
let firstImgWidth = firstImg.clientWidth + 14;
let isDragStart = false, prevPageX, prevScrollLeft;

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    console.log(icon);
    carousel.scrollLeft += icon.id == 'arrow-left' ? -firstImgWidth : firstImgWidth;
  });
});

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if(!isDragStart) return;
  e.preventDefault();
  carousel.classList.add('dragging');
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop); */



document.addEventListener('DOMContentLoaded', () => {
  const prev = document.getElementById('prev-btn');
  const next = document.getElementById('next-btn');
  const list = document.getElementById('carousel');

  const itemWidth = 150;
  const padding = 10;

  prev.addEventListener('click',()=>{
    list.scrollLeft -= itemWidth + padding;
  });

  next.addEventListener('click',()=>{
    list.scrollLeft += itemWidth + padding;
  });
});