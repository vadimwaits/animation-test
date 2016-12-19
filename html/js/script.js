$(document).ready(function() {
    $('#pagepiling').pagepiling({
      direction: 'horizontal',
      keyboardScrolling: true,
      scrollingSpeed: 700,
      sectionSelector: '.section',
      animateAnchor: true,
      anchors: ['nav-slide1', 'nav-slide2', 'nav-slide3', 'nav-slide4'],
      menu: '.nav-menu',
      // afterRender: function(index){
      //   $.fn.pagepiling.moveTo(1);
      // },
    });

  function layout_remove(){
    $('.layout-layer').hide();
  }

  setTimeout(layout_remove, 4000);

  $('.nav-menu').appendTo('.slide-text');

  $.fn.pagepiling.moveTo(1);

  Waves.init();

  $(".btn").click(function(e){
    e.preventDefault();
    return false;
  });

  // $(window).on('resize', function(){
  //   if ($(window).width()<800) {
  //     $('.section .slide-main').each(function (i) {
  //         $(this).insertAfter($('.slide-info').eq(i));
  //     });
  //   }
  // });

});


