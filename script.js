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
	
	$("#projects > div > a").hover( function(){
		var randomColorArray =["red","green","yellow","orange","purple","blue"];
		var randomColorChoice = Math.floor(Math.random() * 6);
		$("#projects > div").css("backgroundColor", randomColorArray[randomColorChoice]);
	});
	
  
});