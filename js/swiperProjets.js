/* swiper */

function initSwiperClient(){
    /* swiper init */
    const swiperClient = new Swiper('#swiperClient', {
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
            el: '#paginationClient',
        },
        // Navigation arrows
        navigation: {
            nextEl: '#nextClient',
            prevEl: '#prevClient',
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
    createSlide("Client", projets, "client")
    initSwiperClient()
    flipCard("Client")
})




/* swiper */

function initSwiperPerso(){
    /* swiper init */
    const swiperPerso = new Swiper('#swiperPerso', {
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
            el: '#paginationPerso',
        },
        // Navigation arrows
        navigation: {
            nextEl: '#nextPerso',
            prevEl: '#prevPerso',
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
    createSlide("Perso", projets, "perso")
    initSwiperPerso()
    flipCard("Perso")
})




