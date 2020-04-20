

// application process ---- Resume upload
( function( $, window, document, undefined )
{

$( '.inputfile' ).each( function()
{
	var $input	 = $( this ),
		$label	 = $input.next( 'label' ),
		labelVal = $label.html();

	$input.on( 'change', function( e )
	{
      var fileName = '';
      
      if( e.target.value )
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			$label.find( 'span' ).html( fileName );
		else
			$label.html( labelVal );
	});

	// Firefox bug fix
	$input
	.on( 'focus', function(){ $input.addClass( 'has-focus' ); })
	.on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
});


})( jQuery, window, document );



// application process ---- Image upload
function readURL(input) {
   if (input.files && input.files[0]) {
       var reader = new FileReader();

       reader.onload = function (e) {
           $('#blah')
               .attr('src', e.target.result);
       };

       reader.readAsDataURL(input.files[0]);
   }
}



// handle navigation of application form
$(document).ready(function () {

$("#next").on("click", function(e){
      $(".first").removeClass("active");
      $("#resume").removeClass("show active");

      $(".second").removeClass("disabled");
      $(".second").addClass("active");
      $("#personal_info").addClass("show active");
      });


   $("#next2").on("click", function(e){
      $(".second").removeClass("active");
      $("#personal_info").removeClass("show active");

      $(".third").removeClass("disabled");
      $(".third").addClass("active");
      $("#education").addClass("show active");
   });  

   $(".next3").on("click", function(e){
      $(".third").removeClass("active");
      $("#education").removeClass("show active");

      $(".fourth").removeClass("disabled");
      $(".fourth").addClass("active");
      $("#skillsandothers").addClass("show active");
   });  


   $("#prev").on("click", function(e){
      $(".second").removeClass("active");
      $("#personal_info").removeClass("show active");

      $(".first").addClass("active");
      $("#resume").addClass("show active");
   });

   $(".prev2").on("click", function(e){
      $(".third").removeClass("active");
      $("#education").removeClass("show active");

      $(".second").addClass("active");
      $("#personal_info").addClass("show active");
   });  

   $(".prev3").on("click", function(e){
      $(".fourth").removeClass("active");
      $("#skillsandothers").removeClass("show active");

      $(".third").addClass("active");
      $("#education").addClass("show active");
   });  
});     




$(document).ready(function () {

// handle form education section

$('#add-edu').on('click', function(e){
   $('#edu-form2').removeClass('d-none')
})

$('#delete-edu').on('click', function(e){
   $('#edu-form2').find("input[type=text], input[type=date], select").val("");
   $('#edu-form2').addClass('d-none')
})


// handle form certifications section

$('#add-cert').on('click', function(e){
   $('#cert-form2').removeClass('d-none')
})

$('#delete-cert').on('click', function(e){
   $('#cert-form2').find("input[type=text]").val("");
   $('#cert-form2').addClass('d-none')
})


// handle form submition

$('.submit').on('click', function(e){
   $('#form').submit()
})

});