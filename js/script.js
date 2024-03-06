const title = document.querySelector('.titolo');
const watchBled = document.querySelector('.watch');
const MoroccoCarousel = document.querySelector('.conteiner_carousel');


const btnright = document.querySelector('.right');
const btnleft = document.querySelector('.left');

let counter = 0 ;


const pic = [

  {
    name : 'welcome',
    description : 'il nostro hollywood',
    img : './img/start.jpg'
  },

  {
    name: 'chefchaouen',
    description: 'la città blu',
    img: './img/chefchaouen out.jpg'

  },

  {
    name: 'atlas',
    description : 'appenino o atlasino ',
    img : './img/atlas.jpg'
  },

  {
    name : 'legzira',
    description : 'oceano e deserto si innamorarono qui ahy che amor complicato',
    img : './img/legzira.jpg'
  },

  {
    name : 'yeah',
    description : ' almeno una volta nella vita si dovrebbe proprio sentire la fragranza di questi fiori magici <3',
    img : './img/yeah.jpg'
  }

];

watchBled.classList.add('none');

setTimeout(()=>{
  title.classList.add('none');
  watchBled.classList.remove('none');
},3000 );


pic.forEach( picture => {

  const getImg = getPicture(picture)
  MoroccoCarousel.innerHTML += `<img src="${getImg}">`

});


// FUNCTION

function getPicture(picture){
  let singlPic = picture.img;
  return singlPic;
};

//btnleft.addEventListener('click', next);

//btnright.addEventListener('click', pre);

function next(){

  imgCollection[counter].classList.add('none');
  //imgSmall[counter].classList.remove('active');
  
  counter++

  if (counter === carouselImgs.length){
    counter = 0;
  }

  imgCollection[counter].classList.remove('none');
  //imgSmall[counter].classList.add('active');
};

function pre(){

  imgCollection[counter].classList.add('none');
  //imgSmall[counter].classList.remove('active');
  
  counter--

  imgCollection[counter].classList.remove('none');
  //imgSmall[counter].classList.add('active');

};