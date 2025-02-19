function initSwiperPres(){
    /* swiper init */
    const swiperPres = new Swiper('#swiperPres', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        // Default parameters
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
            el: '#paginationPres',
        },
        // Navigation arrows
        navigation: {
            nextEl: '#nextPres',
            prevEl: '#prevPres',
        },
    });
}

initSwiperPres()