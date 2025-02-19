// récupération de la section promo
let affichePromo = body.querySelector(".back-promo");

// fonction de création de la promotion
function createPromo(promo){
    affichePromo.innerHTML = `<div class="large-12">
            <h3 class="large-12 text-center">${promo.titre}</h3>
            <h4 class="large-12 text-center mt16">${promo.contenu}</h4>
        </div>`;        
}



// définition du chemin d'accès au json

let cheminPromo = 'json/promo.json';
if (window.location.pathname.includes("/secteurs")) {
    cheminPromo = '../json/promo.json';
}

// Récupération du json promo
fetch(cheminPromo)
.then(ret=>{
    return ret.json()
})
.then(promo=>{
    createPromo(promo);
})