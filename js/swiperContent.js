function createSlide(type, projets, condition){
    // Role : crée les slides projet dans le swiper
    // parametre : projets - fichier json avec les éléments de chaque projet
    //             wrapper - le wrapper où intégrer les slides
    //             condition - condition à remplir pour garder la carte (new/client/perso)
    // retour : rien
        let swiper = document.getElementById(`wrapper${type}`)
        swiper.innerHTML = ""
        projets.forEach(projet => {
            // ajout d'une condition (favoris/client/perso)
            if (projet.projet === condition || projet.statut === condition) {
                let pics = recupPicto(projet.pictos)
                let libs = recupLib(projet.librairies)
                swiper.innerHTML += `<div class="swiper-slide slide${type}">
                    <div class="card-inner">
                        <div class="card-front flex aldev justify-between">
                            <div>
                                <h4 class="large-11 mrlauto text-center">${projet.titre}</h4>
                                <div class="projet-img mt32"><img src="assets/captures-projets/${projet.image}" alt="copie d'écran du projet ${projet.titre}"></div>
                                <p class="large-11 mrlauto mt32">${projet.description}</p>
                            </div>
                            <div class="card-bottom large-11 mrlauto flex justify-between align-center">
                                <p>${projet.date}
                                <p class="large-3 txt-end cta-card">+</p>        
                            </div>
                        </div>
                        <div class="card-back flex aldev justify-between">
                            <div>
                                <h4 class="large-11 mrlauto text-center">${projet.type}</h4>
                                <p class="large-11 mrlauto mt32 bold text-center">Technologies :</p>  
                                <div class="flex gap16 mt16 align-center justify-center">
                                    ${pics}${libs}
                                </div>
                                <p class="large-11 mrlauto mt32 bold text-center">Objectif :</p>  
                                <p class="large-11 mrlauto mt16">${projet.objectif}</p>
                            </div>
                            <div class="large-11 mrlauto flex justify-between align-center">
                                <a class="card-bottom" target="_blank" href="${projet.lien}"><span class="span-blue">-</span> Voir le projet <span class="span-blue">-</span></a>
                                <p class="large-3 txt-end cta-card">-</p>  
                            </div>
                        </div>
                    </div>
                </div>`
            }
        });
    }
    
    
    function recupPicto(elements){
    // parcours : les elements d'un projet pour les mettre dans une chaine de caractère
    // paramtre : elements - le tableau d'elements du projet
    // return : elts - la chaine de caractère a rentrer dans le HTML
        let elts = ""
        elements.forEach(element => {
            elts += `<div class="picto ${element}"></div>`
        })
        return elts
    }
    
    function recupLib(elements){
        // parcours : les elements d'un projet pour les mettre dans une chaine de caractère
        // paramtre : elements - le tableau d'elements du projet
        // return : elts - la chaine de caractère a rentrer dans le HTML
            let elts = ""
            elements.forEach(element => {
                elts += `<p class="p-comp">${element}</p>`
            })
            return elts
        }

    function flipCard(type){    
        // role : retourne les carte projets au clic
        // parametres : aucun
        // retour : aucun
        let swiperSlides = document.querySelectorAll(`.slide${type}`)
        swiperSlides.forEach(swiperSlide =>{
            let cardInner = swiperSlide.querySelector(".card-inner")
            swiperSlide.addEventListener("click", (e)=>{
                swiperSlides.forEach(slide => {
                    if (slide !== swiperSlide) {
                        slide.querySelector(".card-inner").classList.remove("flip-card");
                    }
                });
                cardInner.classList.toggle("flip-card")
            })
        })
    }

