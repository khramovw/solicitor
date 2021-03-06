;(function ($) {
	var moreOptionBtn = $('.more-option');
	var secondForm = $('.second-form');
    var serchic = $('.serch-ic');
    var moresearch = $('.more-search');

	moreOptionBtn.on( 'click', function (e){
        if ($(e.target).text() === "– More option") {
            console.log("close form");
            $(e.target).text("+ More option");
        } else {
            console.log("open form");
            $(e.target).text("– More option");
        }
		secondForm.slideToggle(1000);
		//moreOptionBtn.toggleClass('open');
		
	});

	//init slick slider
	$('.areas-slick-js').slick({
  		slidesToShow: 7,
  		slidesToScroll: 1,
  		autoplay: false,
  		autoplaySpeed: 2000,
  		responsive: [
  			{
  				breakpoint: 1099,
  				settings:{
  					slidesToShow: 6,
  				}
  			},
  			{
  				breakpoint: 1024,
  				settings:{
  					slidesToShow: 5,
  				}
  			},
  			{
  				breakpoint: 880,
  				settings:{
  					slidesToShow: 4,
  				}
  			},
  			{
  				breakpoint: 768,
  				settings:{
  					slidesToShow: 3,
  				}
  			},
        {
          breakpoint: 640,
          settings:{
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings:{
            slidesToShow: 1,
          }
        }
  		]
	});

})(jQuery);