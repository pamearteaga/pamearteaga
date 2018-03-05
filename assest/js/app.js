// anclas del menu
$('a[href^="#"]').click(function() {
  var seccion = $(this.hash);
  if (seccion.length == 0) {
    seccion = $('a[name="' + this.hash.substr(1) + '"]');
  }
  if (seccion.length == 0) {
    seccion = $('html');
  }
  $('html, body').animate({ scrollTop: seccion.offset().top }, 500);
    return false;
  });

// boton menu responsive
$('#menur').click(function(){
  $('ul').toggle();
});

//texto deslizante

$(window).scroll(function(){
  $('p').animate({left: "40%", opacity: 1}, {duration: 450,queue: false});
});


