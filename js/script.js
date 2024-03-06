const title = document.querySelector('.titolo');
const watchBled = document.querySelector('.watch');

const btnright = document.querySelector('.right');
const btnleft = document.querySelector('.left');

watchBled.classList.add('none');

setTimeout(()=>{
  title.classList.add('none');
  watchBled.classList.remove('none');
},3000 );



