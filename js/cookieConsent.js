const banner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("accept-cookies");
const refuseBtn = document.getElementById("refuse-cookies");

if (!localStorage.getItem("cookieConsent")) {
    // si un localstorage cookieConsent 
    banner.style.display = "block"; 
}else{
    // si le localstorage cookieConsent contient refused
    if(localStorage.getItem("cookieConsent") === "refused"){
        // on désactive le script GA
        gtag('consent', 'update', {
            'status': 'denied',
            'ad_storage': 'denied', 
            'analytics_storage': 'denied'
        });
        document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.aldev-web.fr"; 
        document.cookie = "_ga_0RGFHXQM3Z=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.aldev-web.fr";
    }else if(localStorage.getItem("cookieConsent") === "refused"){
        // on active le script GA
        gtag('consent', 'update', {
            'status': 'granted',
            'ad_storage': 'granted', 
            'analytics_storage': 'granted' 
        });
    }
}

acceptBtn.addEventListener("click", (e) => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    // on active le script GA
    gtag('consent', 'update', {
        'status': 'granted',
        'ad_storage': 'granted', 
        'analytics_storage': 'granted' 
    });
});

refuseBtn.addEventListener("click", (e) => {
    localStorage.setItem("cookieConsent", "refused");
    banner.style.display = "none";
    // on désactive le script GA
    gtag('consent', 'update', {
        'status': 'denied',
        'ad_storage': 'denied', 
        'analytics_storage': 'denied' 
    });
    document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.aldev-web.fr"; 
    document.cookie = "_ga_0RGFHXQM3Z=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.aldev-web.fr";
});