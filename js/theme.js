// Dark mode
// récupération du body
// déja fait dans commun.js
// récupération du bouton
let colorMode = document.getElementById("switch-mode")
// on récupère le localstorage access
const theme = localStorage.getItem('theme');
// définition de la map leaflet 
var map = L.map('map').setView([45.23333, 4.18333], 9);

if (window.location.pathname.includes("/secteurs") || window.location.pathname.includes("/pres-projets")) {
    var iconUrlBlack = `../../assets/picto/Logo-AL-developpement-web-black.png`;
    var iconUrlWhite = `../../assets/picto/Logo-AL-developpement-web-white.png`;
} else {
    var iconUrlBlack = `assets/picto/Logo-AL-developpement-web-black.png`;
    var iconUrlWhite = `assets/picto/Logo-AL-developpement-web-white.png`;
}

if (window.location.pathname.includes("/pres-projets")){
    setDark();
} else {
    verifTheme();
}

function verifTheme(){
    // si il y en a un et qu'il contient light
    // on fixe le data-theme sur light et le btn sur checked
    // sinon on fixe sur dark
    if (theme && theme === 'light') {
        body.setAttribute("data-theme","light")
        setLight()
        colorMode.checked = true;
    } else {
        body.setAttribute("data-theme","dark")
        setDark()
    }
}

function setDark(){
    // on fixe le theme sur dark
    var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                subdomains: 'abcd',
                maxZoom: 20
    }).addTo(map);
    //colorMode.checked = true
    var myIcon = L.icon({
        iconUrl: iconUrlBlack,
        iconSize: [38, 38],
        iconAnchor: [16, 16],
    });
    L.marker([45.241701, 4.235366], {icon: myIcon}).addTo(map)
}

function setLight(){
    // on fixe le theme sur light
        var CartoDB_DarkMatter = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);
        var myIcon = L.icon({
            iconUrl: iconUrlWhite,
            iconSize: [38, 38],
            iconAnchor: [16, 16],
        });
        L.marker([45.241701, 4.235366], {icon: myIcon}).addTo(map)
}


