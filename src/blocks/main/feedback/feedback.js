import $ from 'jquery';
import '../../../index';

$(document).ready(function() {
    $(".slider-three").owlCarousel({
        margin:10,
        nav: false,
        loop: true,
        items: 1,
        responsiveClass:true
    })
  });