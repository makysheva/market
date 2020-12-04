import $ from 'jquery';
import '../../../index';


$(document).ready(function() {
  $(".slider-four").owlCarousel({
    margin:10,
        nav: false,
        loop: true,
        items: 1,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
  })
});