

const timeline = gsap.timeline();

const servicePic1 = $(".pic1");
const serviceDesc1 = $(".desc1");
var pic1offset = $(".pic1").offset();
var pic1Bottom = pic1offset.top + servicePic1.outerHeight(); //get bottom Y coordinate of element
var isFirst = true;  //boolean to check if the animation has already been triggered

$(window).scroll(function (){
  var windowPos = $(window).scrollTop() + $(window).height();  //get y coordinate of window bottom

    if (windowPos >= pic1Bottom){  //animation triggers when window bottom scrolls past bottom of picture
      if (isFirst == true){
      timeline.fromTo(servicePic1, 1, {opacity: 0, x: 100}, {opacity: 1, x: 0, ease: Power2.easeOut })
      .fromTo(serviceDesc1, 1, {opacity: 0, x: -100}, {opacity: 1, x: 0, ease: Power2.easeOut}, "-=1" );
      isFirst = false;
      // console.log(windowPos);
    }
  }

});
