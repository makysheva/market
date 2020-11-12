import $ from 'jquery';
import '../../../index';


$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    margin:10,
    nav: false,
    loop: true,
    items: 1,
    responsiveClass:true,
  })
});