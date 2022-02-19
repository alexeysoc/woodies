// // Подключение слик-слайдера
// $(document).ready(function(){
//     $('.testimony-items').slick({
//       // autoplay: true,
//       autoplaySpeed: 2000,
//       dots: true,
//       infinite: true,
//       speed: 500,
//       // fade: true,
//       cssEase: 'linear',
//     });
//   });

  // мЕНЮ БУРГЕР
   const iconMenu =document.querySelector('.header-nav_burger');
   const menuBody =document.querySelector('.header-nav');
    iconMenu.addEventListener("click", function(e){
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });

    //Прокрутка при клике
    const menuLinks = document.querySelectorAll('.header-nav__link[data-goto]');
    if(menuLinks.length>0){
      menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
      });
      
      function onMenuLinkClick(e){
        
        const menuLink = e.target;
        console.log(menuLink);
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
          const gotoBlock=document.querySelector(menuLink.dataset.goto);
          const gotoBlockValue=gotoBlock.getBoundingClientRect().top + pageYOffset-document.querySelector('.header').offsetHeight;

          if (iconMenu.classList.contains('_active')){
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
          }

          window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
          });
          e.preventDefault();
        }
      }
    }



//Popup
const popupLinks=document.querySelectorAll('.popup-link') ; 
const body=document.querySelector('body') ;  
const lockPaadding=document.querySelectorAll('.lock-padding') ;  

let unlock = true;

const timeout = 800;
console.log(popupLinks.length);

if (popupLinks.length>0) {
  for (let index=0; index<popupLinks.length; index ++){
    const popupLink=popupLinks[index] ;
    popupLink.addEventListener("click", function(e){
      const popupName = popupLink.getAttribute('href').replace('#','');
      const curentPopup=document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length>0){
  for(let index=0; index<popupCloseIcon.length; index++){
    const el = popupCloseIcon[index];
    el.addEventListener('click',function(e){
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}

function popupOpen(curentPopup) {
  if(curentPopup && unlock){
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive,false);
    } else {
      bodyLock();
    }
        curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function(e) {
      if (!e.target.closest('.popup__content')){
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock=true){
  if (unlock) {
    popupActive.classList.remove('open');
    if(doUnlock){
      bodyUnlock();
    }
  }
}

function bodyLock(){
  const lockPaaddingValue = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';
   
  if (lockPaadding.length  >0) {
    for (let index=0; index < lockPaadding.length; index++) {
      const el = lockPaadding[index];
      el.style.paddingRight=lockPaaddingValue;
      body.classList.add('lock');
    }
  }
  body.style.paddingRight=lockPaaddingValue;
  body.classList.add('lock');

  unlock=false;
  setTimeout(function() {
    unlock=true;
  }, timeout);
}
function bodyUnlock() {
  setTimeout(function(){
    if(lockPaadding.length>0){
      for(let index=0; index<lockPaadding.length; index++){
        const el =lockPaadding[index];
        el.style.lockPaadding='0px';
      }
    }
    body.style.paddingRight='0px';
    body.classList.remove('lock');
  },timeout);
  unlock=false;
  setTimeout(function() {
    unlock=true;
  },timeout);
}

document.addEventListener('keydown', function(e) {
  if (e.which===27) {
    const popupActive=document.querySelector('.popup.open');
    popupClose(popupActive);
  }
});

(function() {
  //проверяем поддержку
  if(!Element.prototype.closest) {
    //реализуем
    Element.prototype.closest=function(css){
      var node=this;
      while(node) {
        if(node.matches(css)) return node;
        else node=node.parentElement;
      }
      return null;
    };
  }
})();

(function() {
  //проверяем поддержку
  if(!Element.prototype.matches) {
    //определяем свойство
    Element.prototype.matches=Element.prototype.MatchesSelector ||
      Element.prototype.webkitMatchesSelector||
      Element.prototype.mozMatchesSelector||
      Element.prototype.msMatchesSelector;
  }
})();