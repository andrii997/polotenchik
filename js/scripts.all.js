(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(function(){

  // $('video').pause();

  $('.burger').on('click',function(){
    $('.menubox').addClass('active');
  });

  $('.menubox .close').on('click',function(){
    $('.menubox').removeClass('active');
  });
    $('.langs').on('mouseenter', function(){
        $('.langs').addClass('active');
    });

    $('.langs').on('mouseleave', function(){
        $('.langs').removeClass('active');
    });

    $('.advantages .item').on('click', function(){
        $(this).toggleClass('active');
        $(this).find('p').slideToggle(300);
    });

    $('.bigphotoSlider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        lazyLoad: 'ondemand'
      });

      $('.doorSlider').slick({
        dots: false,
        arrows: true,
        prevArrow: 'section.interior .prev',
        nextArrow: 'section.interior .next',
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        asNavFor: '.imgslider',
        lazyLoad: 'ondemand'
      });

      $('.imgslider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        asNavFor: '.doorSlider'
      });

      $('.certslidergall').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        prevArrow: '.certsliderbox .prev',
        nextArrow: '.certsliderbox .next',
        fade: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        lazyLoad: 'ondemand'
      });

      $('.clientsSlider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        appendDots: '.clientsSlider-dots',
        prevArrow: '.clients .arrows .prev',
        nextArrow: '.clients .arrows .next',
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      $('.clientsSlider .slide .more').on('click',function(){
            $(this).parent().find('.text').addClass('active');
            $(this).hide();
      });

      $('.input .inputit').on('focus', function(){
        $(this).parent().addClass('active');
      });

      $('.input .inputit').on('blur', function(){
        if($(this).val().length > 0){
            $(this).parent().find('label').addClass('active');
            $(this).parent().addClass('active');
        } else{ $(this).parent().find('label').removeClass('active');
        $(this).parent().removeClass('active');
      }
    });

      $('.bigphotoSlider-nav .slide').on('click',function(){
        $('.bigphotoSlider-nav .slide').removeClass('active');
          $(this).addClass('active');
          let id= $(this).index();
          $(this).parent().parent().find('.bigphotoSlider').slick("slickGoTo", id);
      });

      $('.certgallerylist .img').on('click',function(){
        $('.modal-gallery').addClass('active');
          let id= $(this).index();
          $('.certslidergall').slick("slickGoTo", id);
      });

      $('.showmap').on('click', function(){
        $('.modal-map').addClass('active');
      });

      $('.modal .close').on('click', function(){
        $('.modal').removeClass('active');
        $('.modal-video .modal-box .video video').remove();
      });

      $('.modal .goback').on('click', function(){
        $('.modal').removeClass('active');
      });


      $('[modal-more-open]').on('click',function(){
        $('.modal-more').addClass('active');
  });

  $('[modal-video-open]').on('click',function(){
    $(this).find('.iframe video').attr( "autoplay", "");
       let vid = $(this).find('.iframe').html();
       console.log(vid)
       $('.modal-video .modal-box .video').html(vid);
        $('.modal-video').addClass('active');
  });

  $('[modal-delivery-open]').on('click',function(){
    $('.modal-delivery').addClass('active');
});

$('[modal-order-open]').on('click',function(){
  let val = $(this).parent().find('.price').text();
  console.log(val);
  $('.modal-order').find('.summval').text(val);
  $('.modal-order').find('.summvalval').val(val);
  $('.modal-order').addClass('active');
});

$('[modal-participate-open]').on('click',function(){
  $('.modal-participate').addClass('active');
});

$('.link').on('click', function(event) {
  $('.menubox').removeClass('active');
  event.preventDefault();
  var id  = $(this).attr('href'),
  top = $(id).offset().top;
  $('html, body').animate({scrollTop: top}, 800);
  setTimeout(function() {
    window.location = id;
  }, 700);
});

$('.goup').click(function() {
  $('html, body').animate({scrollTop: 0},500);
  return false;
});

function countup(className) {
  var countBlockTop = $("."+className).offset().top;
  var windowHeight = window.innerHeight;
  var show = true;
        
  $(window).scroll(function() {
    if(show && (countBlockTop < $(window).scrollTop() + windowHeight)){ 
      show = false;
          
      $('.'+className).spincrement({
        from: 1,
        duration: 4000,
      });
    }
  })	
}
  // иниацизация классов счетчика
  $(function() {
      countup("count1", $(".count1").text());
      countup("count2", $(".count2").text());
      countup("count3", $(".count2").text());
  });

  function fadeToggle() {
    $('a.logo > img').fadeToggle();
    $('a.logo > svg').fadeToggle();
  };

  setInterval(function(){
    fadeToggle();
  }, 3000);


      
});






},{}]},{},[1]);
