/* swiper */

function initSwiperIndex(){
    /* swiper init */
    const swiperIndex = new Swiper('#swiperIndex', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        // Default parameters
        slidesPerView: 'auto',
        spaceBetween: 20,
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            760: {
                spaceBetween: 30
            },
            // when window width is >= 480px
            1300: {
                spaceBetween: 40
            },
            // when window width is >= 640px
            1800: {
                spaceBetween: 50
            }
        },
        pagination: {
            el: '#paginationIndex',
        },
        // Navigation arrows
        navigation: {
            nextEl: '#nextIndex',
            prevEl: '#prevIndex',
        },
    });
}

/* initSwiperIndex() */

/* projets dynamique */
fetch("json/projets.json")
.then(ret=>{
    return ret.json()
})
.then(projets=>{
    createSlide("Index", projets, "favoris")
    initSwiperIndex()
    flipCard("Index")
})




