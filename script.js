$(document).ready(function(){
    $('.rating').click(function() {
        $('.rating').removeClass('active');
        $(this).addClass('active');
    });
});

function submitRating() {
   let rating = $('.active').html();

   if(rating !== undefined && rating !== ''){
        $('#submitted-rating').html(rating);
        $('.form').hide();
        $('.thanks').show();
        $('.thanks').css('display', 'grid')
   }
}