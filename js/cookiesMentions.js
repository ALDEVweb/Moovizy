const modifCookies = document.getElementById("modif-cookies");
const acceptBtnMentions = document.getElementById("accept-cookies-mentions");
const refuseBtnMentions = document.getElementById("refuse-cookies-mentions");

if(localStorage.getItem("cookieConsent") === "refused"){
    modifCookies.innerHTML = `<p>Vous avez refusé les cookies analytiques, vous pouvez à tout moment les accepter en cliquant sur le bouton ci-dessous :</p>`;
    refuseBtnMentions.classList.add('d-none');
}else if(localStorage.getItem("cookieConsent") === "accepted"){
    modifCookies.innerHTML = `<p>Vous avez accepté les cookies analytiques, vous pouvez à tout moment les refuser en cliquant sur le bouton ci-dessous :</p>`;
    acceptBtnMentions.classList.add('d-none');
}


acceptBtnMentions.addEventListener("click", (e) => {
    localStorage.setItem("cookieConsent", "accepted");
    // on active le script GA
    gtag('consent', 'update', {
        'status': 'granted',
        'ad_storage': 'granted', 
        'analytics_storage': 'granted' 
    });
    modifCookies.innerHTML = `<p>Vous avez accepté les cookies analytiques, vous pouvez à tout moment les refuser en cliquant sur le bouton ci-dessous :</p>`;
    acceptBtnMentions.classList.add('d-none');
    refuseBtnMentions.classList.remove('d-none');
});

refuseBtnMentions.addEventListener("click", (e) => {
    localStorage.setItem("cookieConsent", "refused");
    // on désactive le script GA
    gtag('consent', 'update', {
        'status': 'denied',
        'ad_storage': 'denied', 
        'analytics_storage': 'denied' 
    });
    document.cookie = "_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.aldev-web.fr"; 
    document.cookie = "_ga_0RGFHXQM3Z=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.aldev-web.fr";
    modifCookies.innerHTML = `<p>Vous avez refusé les cookies analytiques, vous pouvez à tout moment les accepter en cliquant sur le bouton ci-dessous :</p>`;
    refuseBtnMentions.classList.add('d-none');
    acceptBtnMentions.classList.remove('d-none');
});