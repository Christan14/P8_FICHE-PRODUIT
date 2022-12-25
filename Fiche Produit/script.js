console.log("connecté");

//Je selectionne les vignettes
const vignettes = document.querySelectorAll(".small");
console.log(vignettes);

//Je selectionne l'image grand format
const fullImg = document.getElementById("full");
console.log(fullImg);

//Je selectionne le bouton
const btn = document.querySelector(".btn-add");
console.log(btn);

//J'initialise le panier
let panier = 0;

//Je selectionne la DIV panier-container
const panierContainer = document.querySelector(".panier-container");

//je fais une boucle les vignettes
vignettes.forEach((item) => {
  console.log("ce message apparait pour chaque item du tableau");

  item.addEventListener("click", function () {
    //console.log(item, 'vignette cliquée');

    let imgSource = item.getAttribute("src");
    console.log(imgSource);

    //J'attribue la nouvelle url à l'image grand format
    fullImg.setAttribute("src", imgSource);
  });
}); //fermeture de la boucle forEach


btn.addEventListener('click', function(){
    console.log('bouton cliqué'); 
    // J'ajoute 1 au compteur
    panier = panier + 1 ; 
    console.log(panier); 
    // J'affiche le contenu
    if( panier < 2) {
        panierContainer.innerText = "Vous avez" + " " + panier + " " + "produit dans votre panier"; 
    }else{
        panierContainer.innerText = "Vous avez" + " " + panier + " " + "produits dans votre panier"; 
    }
   


}); 

