// "use strict"

//  window.addEventListener('load', windowLoad);

//  function windowLoad () {
//    document.addEventListener('click', documentActions);
//  }

//  function documentActions(e) {
//    const targetElement = e.target;

//    if (targetElement.hasAttribute('data-goto')) {
//       const gotoElement = document.querySelector(`${targetElement.dataset.goto}`);
//       const headerHeight = document.querySelector(`.header`).offsetHeight;

//       if(gotoElement){
//          window.scrollTo({
//             top: gotoElement.offsetTop - headerHeight,
//             behavior: "smooth"
//          });
//       }

//       e.preventDefault();
//    }

//    if(targetElement.classList.contains('item-works__type') && !targetElement.classList.contains('active')){
//       const activeElement = document.querySelector(`.item-works__type.active`);
//       const elements = document.querySelectorAll(`.item-works__item`);
//       const elementType = targetElement.dataset.workType;

//       activeElement.classList.remove('active');
//       targetElement.classList.add('active');

//       elements.forEach(elements => {
//             !elementType || element.dataset.workType === elementType ?
//             element.hidden = false : element.hidden = true;
//       })
//    }
//  }

$(".menu a").on("click", function (event) {
   event.preventDefault();
   var id  = $(this).attr('href'),

   //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
   
   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: top}, 1300);
});