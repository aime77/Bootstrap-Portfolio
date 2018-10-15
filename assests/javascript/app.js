// Wrap every letter in a span
$('.ml3').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: true})
    .add({
      targets: '.ml3 .letter',
      opacity: [0,1],
      easing: "easeInOutQuad",
      duration: 2250,
      delay: function(el, i) {
        return 150 * (i+1)
      }
    }).add({
      targets: '.ml3',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });



    
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
       });
     $('.menu-cont').on('click', function() {
       
       var menu = $('.menu-txt').text();
         var close = $('.menu-txt').attr('data-text');
       
       $('.menu').toggleClass('active');
       
       if ($('.menu-txt').text(menu)) {
         $('.menu-txt').text(close);
       } else {
         $('.menu-txt').text(menu);
       } 
         $('.menu-txt').attr('data-text',menu);
     })
     var findNCenter = function() {
       var elems = document.querySelectorAll('.center-vertical');
     
       for(var i =0; i<elems.length; i++) {
         elems[i].style.marginTop = (elems[i].parentNode.offsetHeight - elems[i].offsetHeight)/2 + 'px';
       }
     };
     
     document.addEventListener && document.addEventListener('DOMContentLoaded', findNCenter);
     window.addEventListener && window.addEventListener('resize', findNCenter);
     
     $(document).ready(function() {
     
       var count = $('#inner p').length;
       var i = 1;
         
     setInterval(function() {
       if (i < count) {
         $('#inner').css('-webkit-transform','translate3d(0,-' + i + '00%,0)');
           i++;
       }
     }, 800);
     });