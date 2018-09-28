/**
 * Origano
 *
 * This file contains all template JS functions
 *
 * @package Origano
--------------------------------------------------------------
                   Contents
--------------------------------------------------------------

 * 01 - Owl Carousel
          - Home Slider    
          - New product Slider
          - Latest News Slider    
          - Clients Slider    
 * 02 - Navigation / Menu
 * 03 - Smooth Scroll
 * 04 - Dropdown Select 
 * 05 - Cart Js
 * 06 - Preloader


--------------------------------------------------------------*/
(function($) {
  "use strict";

  var $window = $( window )

// Owl Carousel 

  // Home Slider    
    $("#home-slider").owlCarousel({
      loop: true,
      items: 1,
      dots: false,
      nav: true,
      autoplayTimeout: 10000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 10,
      autoplay: true,
      slideSpeed: 600,
      navText: [''],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 1,
            nav: false,
            dots: false,
        },
        1100: {
            items: 1,
            nav: true,
            dots: false ,
        }
      }
    });

  // New Product Slider
    $("#new-product-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: true,
      nav: true,
      autoplayTimeout: 10000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 30,
      autoplay: true,
      slideSpeed: 5000,
      smartSpeed: 2000,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: true,
        },
        1100: {
            items: 3,
            nav: true,
            dots: true,
        }
      }
    });

  // Latest News Slider    
    $("#latest-news-slider").owlCarousel({
      loop: true,
      items: 3,
      dots: true,
      nav: true,
      autoplayTimeout: 10000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 20,
      autoplay: true,
      slideSpeed: 6000,
      smartSpeed: 2000,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 2,
            nav: false,
            dots: true,
        },
        1100: {
            items: 3,
            nav: true,
            dots: true,
        }
      }
    });
    
  // Client Slider    
    $("#client-slider").owlCarousel({
      loop: true,
      items: 5,
      dots: false,
      nav: false,
      autoplayTimeout: 5000,
      smartSpeed: 2000,
      autoHeight: false,
      touchDrag: true,
      mouseDrag: true,
      margin: 130,
      autoplay: true,
      slideSpeed: 600,
      navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
            items: 1,
            nav: false,
            dots: false,
        },
        600: {
            items: 1,
            nav: false,
            dots: false,
        },
        768: {
            items: 3,
            nav: false,
            dots: false,
        },
        1100: {
            items: 5,
            nav: false,
            dots: false,
        }
      }
    });

// Navigation / Menu
    $("#cssmenu").menumaker({
      title: "Menu",
      format: "multitoggle"
    });

// Smooth Scroll
    smoothScroll.init();
    
// Dropdown Select
  $( document.body ).on( 'click', '.dropdown-menu li', function( event ) {
      var $target = $( event.currentTarget );
      $target.closest( '.dropdown' )
         .find( '[data-bind="label"]' ).text( $target.text() )
            .end()
         .children( '.dropdown-toggle' ).dropdown( 'toggle' );
      return false;
   });

// Cart Js       
    // on mouse enter show cart widget
      $("#cart").hover(function() {
        $(".cart-box").addClass("active");
      });
    // on mouse leave hide cart widget
      $(".cart-box").mouseleave(function() {
        $(".cart-box").removeClass("active");
      });  

// Preloader   
    $window.on('load', function() { 
      $('.status').fadeOut();
      $('.preloader').delay(350).fadeOut('slow'); 
    }); 

})(jQuery);