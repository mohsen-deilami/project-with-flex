let menubtn=document.querySelector('.header__icon');
let menu=document.querySelector('.menu');

let headerbtnIcon=document.querySelector('.header__icon i')
menubtn.addEventListener('click',function(){
  if(headerbtnIcon.classList.contains('fa-bars')){
    menu.style.left="0";
    headerbtnIcon.classList="fa fa-times";
  }
  else
  {
    menu.style.left="-256px";
    headerbtnIcon.classList="fa fa-bars"
  }
 
   console.log(headerbtnIcon);
   
})