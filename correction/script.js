

function generate(){

    // Création de la balise <p> de son id et du contenu texte
    var texte = document.createElement("p");
    texte.setAttribute("id", "parag1");
    texte.appendChild(document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...."));
    document.body.appendChild(texte);

    //Crétion du bouton et de son nom et appel de la fonction
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("changer style"));
    document.body.appendChild(btn);

    // On réutilise la fonction changerStyle() créer dans le premier exo-js
    btn.onclick = function changerStyle(){
        var parag2 = document.getElementById('parag1');
        parag2.style.color="white";
        parag2.style.backgroundColor="#222";
        parag2.style.border="10px dotted red";
        parag2.style.padding="5px";
    };

}