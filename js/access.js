

// récupération du bouton access
let switchAccess = document.getElementById("switch-access");
// récupération de l'image à changer
let btnAccess = document.getElementById("button-access");
// on récupère le localstorage access
const access = localStorage.getItem('access');

verifAccess();

//switch access
// on surveille le changement sur le switch
switchAccess.addEventListener("change",(e)=>{
    // on change le datastyle et l'image affiché en fonction et on crée un localstorage
    if(switchAccess.checked){
        setAccess()
    }else{
        setNormal()
    }
})

function verifAccess(){
    // si il y en a un et qu'il contient true
    // on fixe le data-style sur access et le btn sur checked
    // sinon on ne fait rien
    if (access && access === 'true') {
        setAccess()
        switchAccess.checked = true;
    }
}

function setAccess(){
    // on change le datastyle et l'image affiché et on crée un localstorage
    body.setAttribute("data-style","access")
    btnAccess.classList.add("p-access-checked")
    localStorage.setItem("access","true")
}

function setNormal(){
    // on change le datastyle et l'image affiché et on crée un localstorage
    body.setAttribute("data-style","normal")
    btnAccess.classList.remove("p-access-checked")
    localStorage.setItem("access","false")
}