$(function(){

$("body").niceScroll(); //to trigger nicescroll

/********************** start second nav *********************************************/

	$(".second_nav ul li").hover(function(){

		$(this).addClass("active").siblings().removeClass("active");//to add class active to li was clicked
		$(".main_product .container >div").hide(0);
		$('#'+$(this).data("main_broduct")).fadeIn(0)//to show div was clicked  on his li
		$(".overlay").fadeIn(0)
   });

	$(".main_product .container >div ").on('mouseleave',function(){
		$(this).hide(0);			//to hide div was clicked  on his li
		$(".second_nav ul li").removeClass("active");	//to  remove   Class active to li when leave
         $(".overlay").hide(0)
	});


/********************** end second nav *********************************************/

/********************** start slide *********************************************/
	
	var leftarrow = $(".slide .fa-arrow-left"),
	    rightarrow = $(".slide .fa-arrow-right")

	    function checkclient()
	    {
	    	$(".check .client:first").hasClass("move_slide")?leftarrow.fadeOut(0) :leftarrow.fadeIn(0)
			$(".check .client:last").hasClass("move_slide")?rightarrow.fadeOut(0) :rightarrow.fadeIn(0)		
	    }
      checkclient();

      $(".slide i").click(function(){


      	if ($(this).hasClass("fa-arrow-right"))
      	{
      		$(".slide .container .move_slide").fadeOut(500,function(){

      			$(this).removeClass("move_slide").next().addClass("move_slide").fadeIn(1000)

      			checkclient();
      		});
      	}

      	else
      	{
       		$(".slide .container .move_slide").fadeOut(500,function(){

      			$(this).removeClass("move_slide").prev().addClass("move_slide").fadeIn(1000)

      			checkclient();
      		});     		
      	}

      });
/********************** end slide *********************************************/

/********************** start two photo *********************************************/

(function repeat(){

		$(".two_photo .two_photo_one .images .show").each(function(){
			if( ! $(this).is(":last-child"))
			{
				$(this).fadeOut(400,function(){
					$(this).removeClass("show").next().addClass("show").fadeIn()			
					repeat();
				})				
			}
			else
			{
				$(this).fadeOut(400,function(){
					$(this).removeClass("show").siblings().eq(0).addClass("show").fadeIn()			
					repeat();
				})
			}
		})
		}());

/********************** end two photo *********************************************/

/********************** start full *********************************************/

	var full = $(".full")
	$(".fa-user").hover(function(){

		full.fadeIn(0)
	});
	$(".fa-times").click(function(){

		full.fadeOut(0)
	});
	full.mouseleave(function(){

		full.fadeOut(0)
	
	});

/********************** end full *********************************************/

/**********************  first form  to login  *********************************************/

	$(".second_nav .reach .first_a").click(function(e){
		e.preventDefault()
		$(".dark").fadeIn()
	});
	$(".dark").click(function(){
		$(this).fadeOut()
	});
	$(".dark .login").click(function(e){
		e.stopPropagation()
	});
	$(".dark .login input[type='submit']").click(function(e){
		e.preventDefault()
		$(".dark").fadeOut()
	});

/**********************  end form  to login  *********************************************/

/**********************  start second form  to sign up  *********************************************/

	$(".second_nav .reach .second_a").click(function(e){
		e.preventDefault()
		$(".test").fadeIn()
	});
	$(".test").click(function(){
		$(this).fadeOut()
	});
	$(".test .sign_up").click(function(e){
		e.stopPropagation()
	});
	$(".test .sign_up input[type='submit']").click(function(e){
		e.preventDefault()
		$(".test").fadeOut()
		
	});
/**********************  end second form  to sign up  *********************************************/

/*************************************************************************/
/*************************************************************************/
/*************************************************************************/
/*************************************************************************/

/*******************************    start clothing     ******************************************/



/*******************************   start filter    ******************************************/


	$(".all_photo ul li").click(function(){

		$(".all").fadeOut();
		$('.'+$(this).data("show")).fadeIn()
		$(this).addClass("active").siblings().removeClass("active");

	});


/*******************************   end filter    ******************************************/


/*******************************    start typer     ******************************************/

	var the_text  = $(".typer").data("text"),
	    len =  the_text.length,
	    counter = 0;

        the_typer = setInterval(function(){

        	$(".typer").each(function(){
        		$(this).html($(this).html() + the_text[counter])


        	});

        	counter+=1

        	if(counter >= len )
        	{
        		clearInterval(the_typer)
        	}

        },20);

});

/*******************************    end typer    ******************************************/



/*******************************    end clothing     ******************************************/

/*************************************************************************/
/*************************************************************************/
/*************************************************************************/
/*************************************************************************/


/*******************************   start scroll    ******************************************/
	$(window).scroll(function(){

		if($(window).scrollTop()<240)
		{
			$(".fa-chevron-circle-up").fadeOut()
		}
		else
		{
			$(".fa-chevron-circle-up").fadeIn()
		}
	});

	$(".fa-chevron-circle-up").click(function(){

		$("html").animate({

			scrollTop:0
		},500);

	});


/*******************************   end scroll    ******************************************/

