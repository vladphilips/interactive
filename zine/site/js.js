// JavaScript Document
//<!--JavaScript Horizontal Scroll-->
	


    (function($) {
        var elem = $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
            {
            height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                console.log(percent);
            }
        });

        $(window).resize(function() {
          if ($(window).width() <= 768) {
            elem.destroy();
          }
          else {
            elem.reinitialize();
          }
        });
    }(jQuery));

	
	
//<!--BW Video Position-->


	$(window).bind('scroll', function() {
     if ($(window).scrollLeft() > 400) {
          document.getElementById("#videoback").style.left = "0";
     }
     else {
         document.getElementById("#videoback").style.left = "-300px";
     }
    });

	
//<!--Vimeo Zoom-->
//	
//<!--
//	<script>
//		
//		$(function(){
//		$('#cimg1').data('size','big');
//		});
//		
//		window.addEventListener('scroll', () => {
//			const scrolled = window.scrollY;
//		
//			if (scrolled > 600)
//				{
//				if($('#cimg1').data('size') == 'big')
//				{
//					$('#cimg1').data('size','small');
//					$('#cimg1').stop().animate({
//						height:'700px', width: '1200px', top: '-3%'
//					},600);
//				}
//			}
//			else
//			{
//				if($('#cimg1').data('size') == 'small')
//				{
//					$('#cimg1').data('size','big');
//					$('#cimg1').stop().animate({
//						height:'400px', width: '900px', top: '12%'
//					},600);
//				}  
//			}
//		});
//	</script>
//-->


//<!--Title Animation-->
	

		
		$(function(){
		$('.title').data('size','big');
		});
		
		window.addEventListener('scroll', () => {
			const scrolled = window.scrollY;
		
			if (scrolled > 400)
				{
				if($('.title').data('size') == 'big')
				{
					$('.title').data('size','small');
					$('.title').stop().animate({
						left: '-200px'
					},600);
				}
			}
			else
			{
				if($('.title').data('size') == 'small')
				{
					$('.title').data('size','big');
					$('.title').stop().animate({
						left: '310px'
					},600);
				}  
			}
		});

	
//<!--Image Change-->
	

window.addEventListener('scroll', () => {
const scrolled = window.scrollY;
		
    if (scrolled < 600)
	{
		$('#cimg1').attr("src","images/Sequence 01.00_01_16_09.Still009.jpg");
    };
	if (scrolled > 700)
	{
		$('#cimg1').attr("src","images/Sequence 01.00_01_16_18.Still010.jpg");
    };
    if (scrolled > 800)
	{
		$('#cimg1').attr("src","images/Sequence 01.00_01_17_03.Still011.jpg");
    };
	    if (scrolled > 900)
	{
		$('#cimg1').attr("src","images/Sequence 01.00_01_17_08.Still012.jpg");
    };
	    if (scrolled > 1000)
	{
		$('#cimg1').attr("src","images/Sequence 01.00_01_17_12.Still013.jpg");
    };
  
});

	

//		$(function(){
//		$('#cimg1').data('size','big');
//		});
//		
//		window.addEventListener('scroll', () => {
//			const scrolled = window.scrollY;
//		
//			if (scrolled > 800)
//				{
//				if($('#cimg1').data('size') == 'big')
//				{
//					$('#cimg1').data('size','small');
//					$('#cimg1').stop().animate({
//						left: '-200px'
//					},1000);
//				}
//			}
//			else
//			{
//				if($('#cimg1').data('size') == 'small')
//				{
//					$('#cimg1').data('size','big');
//					$('#cimg1').stop().animate({
//						left: '310px'
//					},1000);
//				}  
//			}
//		});
