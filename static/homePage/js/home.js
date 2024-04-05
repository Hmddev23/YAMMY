
/*
=======
HOME JS
=======
*/

const carousel = document.querySelector('.carousel');
const arrowIcons = document.querySelectorAll('.arrowIcon');
const firstImg = carousel.querySelectorAll('img')[0];
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    // console.log(icon);
    carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
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
carousel.addEventListener('mouseup', dragStop);