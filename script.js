wow = new WOW({
  
  mobile:false
  
})

wow.init();
    
$(function() {
  
  $('a[href*="#"]:not([href="#"])').click(function() { // SMOOTH SCROLLING START
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      
      if (target.length) {
        
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        
        return false;
      }
    }
  }); // SMOOTH SCROLL END
	
	$(".sample").on("mouseenter", function(){
		var randomColorArray =["255,0,0,0.2", "0,255,0,0.2", "255,255,0,0.2", "255,153,51,0.2", "102,102,204,0.2", "0,0,255,0.2", "255,0,255,0.2", "0,255,255,0.2"];
		var randomColorChoice = Math.floor(Math.random() * 8);
		$("#projects > div").css("backgroundColor", "rgba(" + randomColorArray[randomColorChoice]);
	});
	$(".sample").on("mouseleave", function(){
		$("#projects > div").css("backgroundColor", "rgba(0,0,0,0.2");
	});
	
  
});