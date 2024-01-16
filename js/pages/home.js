const swiperTestmonials = new Swiper('.swiper-testmonials', {
    slidesPerView: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function fraction(number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return '0' + number;
            } else {
                return number;
            }
        }
    },
    navigation: {
        nextEl: '.swiper-button-testmonials-next',
        prevEl: '.swiper-button-testmonials-prev',
    },
});