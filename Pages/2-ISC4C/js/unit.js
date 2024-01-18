document.querySelector(".information").style.height = "50px";
let Btn1 = document.querySelector(".U1");
let Btn2 = document.querySelector(".U2");
let Btn3 = document.querySelector(".U3");
let Btn4 = document.querySelector(".U4");
let Btn5 = document.querySelector(".U5");
//Fonction qui ajoute puis supprime les div de hover

function addDiv(e, x, y) {
    document.querySelector(".information").style.height = "auto";
    document.querySelector(".information").style.background = "#5e393c";
    document.querySelector(".information").style.position = "absolute";
    document.querySelector(".information").style.left = CSS.px(e.left - 10);
    document.querySelector(".information").style.top = CSS.px(e.top - 40); 
    document.querySelector(".information").style.borderRadius = "20px";
    document.querySelector(".information").style.padding =  "5px 10px 5px 10px";

}
function removeDiv(){
    document.querySelector(".information").style.display = "none";
}

// javascript pour les bouton lien de nos modules
Btn1.addEventListener("mouseover", event => {
    document.querySelector(".information").style.display = "block";
    let posX =  document.querySelector(".information").left;
    let posY = document.querySelector(".information").top;
    const e = event;
    addDiv(event, posX, posY);
    document.querySelector(".information").innerHTML = "Unité 1 - Introduction aux applications <br> Dans cette unité, tu apprendras à déclarer<br> différents types de structures de données,<br> principalement, les tableaux à une et deux<br> dimensions et les listBox. Tu vas apprendre <br> à remplir une listBox et un tableau avec des <br>données entrées par l’utilisateur ou générées <br>aléatoirement. Tu apprendras aussi à manipuler<br> des chaines de caractères, en les décomposant<br> et recomposant. De plus, tu apprendras à bien <br>documenter le code source de tes programmes.<br> ";
})
Btn1.addEventListener("mouseout", event => {
    removeDiv();
})


Btn2.addEventListener("mouseover", event => {
    document.querySelector(".information").style.display = "block";
    const e = event;
    let posX =  document.querySelector(".information").left;
    let posY = document.querySelector(".information").top;
    addDiv(e, posX, posY);
    document.querySelector(".information").innerHTML = "Unité 2 - L’orienté objet dans le C# <br> Dans cette unité, tu apprendras à<br> écrire des programmes C#<br> qui utiliseront des données<br> composées pour former un nouvel objet.<br> Tu devras par la suite manipuler les nouveaux <br>objets, en leur attribuant des données, les lire <br>et les afficher dans les structures de données<br> étudiées dans l’unité précédente.. <br>";    
    // timeout = setTimeout(callback, 1000);
})
Btn2.addEventListener("mouseout", event => {
    removeDiv();

})
Btn3.addEventListener("mouseover", event => {
    document.querySelector(".information").style.display = "block";
    const e = event;
    addDiv(e);
    document.querySelector(".information").innerHTML = "Unité 3 - Les évènements souris et clavier du C# <br>Dans cette unité, tu apprendras à construire des programmes<br> simples et complexes utilisant des évènements clavier<br> et de la souris dans une interface graphique.<br> Tu apprendra à identifier des erreurs de logique,<br> de syntaxe et d'exécution. Tu développeras des<br> programmes qui utilisent des images et des textes ... <br>";
})
Btn3.addEventListener("mouseout", event => {
    removeDiv();
})
Btn4.addEventListener("mouseover", event => {
    document.querySelector(".information").style.display = "block";
    const e = event;
    addDiv(e);
    document.querySelector(".information").innerHTML = "Unité 4 - Gestion des données et les fichiers C# <br> Dans cette unité, tu apprendras à construire<br> des programmes C# qui utilisent des fichiers <br> pour lire ou écrire des données ou des objets.<br>";
})
Btn4.addEventListener("mouseout", event => {
    removeDiv();
})
Btn5.addEventListener("mouseover", event => {
    document.querySelector(".information").style.display = "block";
    const e = event;
    addDiv(e);
    document.querySelector(".information").innerHTML = "Unité 5 - La conception d'un logiciel d'envergure<br> Dans cette unité, tu apprendras à développer un logiciel<br> d'envergure en utilisant toutes les étapes du cycle de vie d'un logiciel.<br> Tu apprendras à analyser les besoins de la cliente ou du client, à planifier le design et la construction d'un programme d'envergure<br> en utilisant la conception modulaire, la manipulation de plusieurs fichiers,<br> la vérification et la validation d'un programme, la documentation externe<br> ainsi que la présentation de ce logiciel.<br>";
})
Btn5.addEventListener("mouseout", event => {
    removeDiv();
})
