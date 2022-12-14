//nav position
jQuery(window).scroll(function(){
  var $sections = $('section');
  $sections.each(function(i,el){
      var top  = $(el).offset().top-180;
      var bottom = top +$(el).height();
      var scroll = $(window).scrollTop();
      var id = $(el).attr('id');      
      if( scroll > top && scroll < bottom){
          $('.nav-link').removeClass('active');
          $('a[href="#'+id+'"]').addClass('active');
      }
  })
});

//nav smooth
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length
        ? target
        : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 120,
          },
          500
        );
        return false;
      }
    }
  });
});

let homeSwiper = new Swiper(".swiper", {

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 480px
      425: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is >= 640px
      728: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    },
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Idioma
$.getJSON('lang.json', function(json) {
  $('.translate').click(function () {
    let lang = $(this).attr('id');
    $('.lang').each (function (index, value) {
      $(this).text(json[lang][$(this).attr('key')])
    })    
  });
});


$('.translate').click(function() {
  $('.translate').removeClass('active')
  $(this).addClass('active')
});


// Responsive
if (window.matchMedia("(max-width: 425px)").matches) {
  $('.navbarButons').append($('.botones'))
}
window.addEventListener('resize', function() {
  if (window.matchMedia("(max-width: 425px)").matches) {
    $('.navbarButons').append($('.botones'))
  } else {
    $('.nav-item.bg').before($('.botones'))
  }
})

var tour1 = new Tour({
    storage: false,
    steps: [
      {        
        orphan: true,
        title: "",
        content: `<h2 class='titleIntro'>Dise??ador Web, Front End, UI/UX</h2>`,
        smartPlacement: true,
        animation: true,
        backdrop: true,
        template: `<div class='popover tour main'>
        <div class='modal-header'></div>
        <div class='contentP'>
          <div class='image'>
            <img src="images/fotoperfil.jpeg" alt=""> 
          </div>  
          <div class='popover-content'></div>
        </div>
            <div class='d-flex navigation justify-content-between'> 
              <div class='popover-navigation d-flex p-0'>            
                  
                  <button class='btn next' data-role='next'></button>
              </div>
            </div>
          </div>
            `,
    },
    {
      element: "#ingles",
      title: "Nivel de ingles conversacional",
      content: "Nivel de ingles conversacional",
      smartPlacement: true,
      template: `
        <div class='popover tour secondary'>
        <div class='arrow'></div>
        <div class='modal-header d-flex justify-content-between'>
            <div class='closed' data-role="end">??</div>
        </div>        
        <div class='popover-content'></div>
        <div class='popover-navigation d-flex'>
            </div>
        </div>
        
            `
    }
    
  ]});

  // Initialize the tour
  tour1.init();
  
  // Start the tour
  tour1.start();

setTimeout(function () {
    jQuery('.next').trigger('click');
 }, 800);

 setTimeout(function () {
  jQuery('.closed').trigger('click');
}, 800);
