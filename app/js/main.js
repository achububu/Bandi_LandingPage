$(document).ready(function () {
    (jQuery)(function($) {
        $('.slick-container').slick({
            dots: true,
            arrows: false,
            infinite: true,
        });
        // Smooth Scroll
        var scrollLink = $('.scroll');

        scrollLink.click(function (e) {
            e.preventDefault();
            $('body,html').animate({
                scrollTop: $(this.hash).offset().top
            }, 500);
        });

        $('#works .btn').click(function (e) {
            e.preventDefault();
            $(this).addClass('btn-test');
            $(this).siblings().removeClass('btn-test');
        });

        $(window).scroll(function () {
            var scrollbarLocation = $(this).scrollTop();
            scrollLink.each(function () {
                var sectionOffset = $(this.hash).offset().top;
                if (sectionOffset <= scrollbarLocation) {
                    $(this).addClass('active');
                    $(this).parent().siblings().children().removeClass('active');
                }
            })
        });
        var $arr = [ 'http://localhost:3000/img/funfact_bg.png', 'http://localhost:3000/img/funfact_bg1.png'];
        var $ffbg = 'http://localhost:3000/img/funfact_bg.png' ;
        var $ffbg1 = 'http://localhost:3000/img/funfact_bg1.png' ;
        // $.each($arr, function(propName, propVal) {
        //     console.log(propName, propVal);
        // });
        // $arr.forEach(function(item) {
        //     console.log(item);
        //     $('#funfact').css('background-image', 'url(' + item + ')').fadeToggle(1000).delay(3000);
        //     console.log($('#funfact').css('background-image').slice(4, -1).replace(/"/g, ""));
        // });
        // var i = 0;
        // while (i < $arr.length) {
        //     setTimeout(function() {  $('#funfact').css('background-image', 'url(' + $arr[i] + ')').fadeToggle(1000);
        //     }, 5000);
        //     i++;
        // }
        // $.each($arr, function( index, value ) {
        //     $('#funfact').click(function () {
        //         $('#funfact').css('background-image', 'url(' + value + ')').fadeIn(1000);
        //     });
            // setTimeout(function() {  $('#funfact').css('background-image', 'url(' + value + ')').fadeToggle(1000);
            // }, 5000);
            // console.log($('#funfact').css('background-image').slice(4, -1).replace(/"/g, ""));
        // });
        // $('#funfact').click(function() {
        //     $arr.each(function(){
        //         $('#funfact').css('background-image', 'url(' + $arr + ')');
        //         console.log($('#funfact').css('background-image').slice(4, -1).replace(/"/g, ""));
        //     });
        // });
        // console.log($('#funfact').css('background-image').slice(4, -1).replace(/"/g, ""));
        // console.log( $ffbg);
        // console.log($('#funfact').css('background-image').slice(4, -1).replace(/"/g, "") == $ffbg);
    });
});




