$('.sl').slick({
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {

            }
        }
    ]
});

$('.sl2').slick({
	slidesToShow: 4,
	slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1023,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 980,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                centerMode: false,
                centerPadding: '10px',
                arrows: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: false
            }
        }
    ]
});
