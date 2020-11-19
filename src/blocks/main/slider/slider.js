import $ from 'jquery';
import '../../../index';


$(document).ready(function() {
  $(".slider-one").owlCarousel({
    margin:10,
    nav: false,
    loop: true,
    items: 1,
    responsiveClass:true,
  })
});