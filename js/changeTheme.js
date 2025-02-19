// surveille le changement d'état du bouton
colorMode.addEventListener("change",(e)=>{
    // on change l'attribut data-theme en light ou dark en fonction de l'état
    if(colorMode.checked){
        body.setAttribute("data-theme","light")
        setLight()
        localStorage.setItem("theme", "light");
    }else{
        body.setAttribute("data-theme","dark")
        setDark()
        localStorage.setItem("theme", "dark");
    }
})