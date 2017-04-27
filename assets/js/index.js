$(document).ready(function(){
	console.log("JavaScript: ENGAGED.");
//////Slideshow//////
//////Slideshow//////
//////Slideshow//////
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

/////////Popovers for missing routes/////////
/////////Popovers for missing routes/////////
/////////Popovers for missing routes/////////
$('[data-toggle="popover"]').popover({title: "Route not ready", content: "Coming Soon!", placement: "auto", container: "body"})

/////////smooth scrolling/////////
/////////smooth scrolling/////////
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
});