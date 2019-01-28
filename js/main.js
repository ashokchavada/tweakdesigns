document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $(document).ready(function() {
    var owl = $('.owl-carousel');
  
    owl.owlCarousel({
      items: 1,
      autoplay: true,
      loop: true,
      animateIn: 'FadeIn',
      autoplayTimeout: 10000,
      margin: 30,
      stagePadding:30,
      smartSpeed:450
    });
  
  });