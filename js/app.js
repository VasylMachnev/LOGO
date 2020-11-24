$(function() {
  const header = $("#header");
  let headerH = header.innerHeight();

  headerScroll();

  $(window).on("scroll resize", function() {
      headerScroll();
  });

  /* Preloader
 ==================================== */
 $(window).on('load', function () {
     $('#loading')
       .delay(1000)
       .fadeOut('slow', function () {
         $(this).remove();
       });
   });

  /* Header class on scroll
  ================================== */

  function headerScroll() {
    let scrollTop = $(this).scrollTop();
    innerHeight = header.innerHeight();

    if (scrollTop >= (headerH)) {
      header.addClass("header--dark")
    } else {
      header.removeClass("header--dark")
    };
  };

  /* Smooth scroll to sections
  ================================== */

  $("[data-scroll]").on("click", function(e) {
    e.preventDefault();

    let $this = $(this),
    scrollEl = $(this).data('scroll');
    blockOffset = $(scrollEl).offset().top - headerH;

    $("html, body").animate({
      scrollTop: blockOffset
    }, 500);
  });

  /* Scroll Spy
    ================================== */

    $(window).on("scroll", function() {
      let scrollTop = $(this).scrollTop();
      let windowH = $(window).height();

      $("[data-scrollspy]").each(function() {

        let sectionId = $(this).data('scrollspy');
        let sectionOffset = $(this).offset().top;
        sectionOffset = sectionOffset - (windowH * 0.3);

        if (scrollTop >= sectionOffset) {
            $('#nav [data-scroll]').removeClass('active');

            $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
        }

        if (scrollTop == 0) {
            $('#nav [data-scroll]').removeClass('active');
        }
      });
    });

    /* Modal
      ================================== */
      $('[data-modal]').on('click', function(event) {
       event.preventDefault();
       let modal = $(this).data('modal');

       $('body').addClass('no-scroll');
       $(modal).addClass('show');

       setTimeout(function() {
           $(modal).find('.modal__content').css({
               transform: 'scale(1)',
               opacity: '1'
           });
       }, 100);
   });


   $('[data-modal-close]').on('click', function(event) {
       event.preventDefault();
       let modal = $(this).parents('.modal');
       modalClose(modal);
   });


   $('.modal').on('click', function() {
       let modal = $(this);
       modalClose(modal);
   });


   $('.modal__content').on('click', function(event) {
       event.stopPropagation();
   });


   function modalClose(modal) {
       modal.find('.modal__content').css({
           transform: 'scale(0.5)',
           opacity: '0'
       });

       setTimeout(function() {
           $('body').removeClass('no-scroll');
           modal.removeClass('show');
       }, 200);
   }

   /* Slick Slider https://kenwheeler.github.io/slick/
     ================================== */
    /* Slider Init */
    let introSlider = $("#introSlider");
    let reviewsSlider = $("#reviewsSlider");
    let portfolioSlider = $("#portfolioSlider");

    function sliderInit(sliderName, isInfinite, hasArrows, hasDots) {
      sliderName.slick({
        infinite: isInfinite,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: hasArrows,
        dots: hasDots,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
      });
    }


     /* Intro Slider */
     sliderInit(introSlider, true, true,  false);

     $('#introSliderPrev').on("click", function() {
       introSlider.slick('slickPrev');
     });

     $('#introSliderNext').on("click", function() {
       introSlider.slick('slickNext');
     });


     /* Reviews Slider */
     sliderInit(reviewsSlider, true, false, true);

      $('#reviewsSliderPrev').on("click", function() {
       reviewsSlider.slick('slickPrev');
     });

     $('#reviewsSliderNext').on("click", function() {
       reviewsSlider.slick('slickNext');
     });


     /* Portfolio Slider */
     sliderInit(portfolioSlider, true, false, true);

      $('#portfolioSliderPrev').on("click", function() {
       reviewsSlider.slick('slickPrev');
     });

      $('#portfolioSliderNext').on("click", function() {
       reviewsSlider.slick('slickNext');
     });
});
