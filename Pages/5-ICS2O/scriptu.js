let iteml = document.getElementById("liste_lecon");
let itemt = document.getElementById("liste_travaux");
let itemf = document.getElementById("liste_formative");
let txt = iteml
let titre = ""
let desc = ""

// Event listener pour chaque boîte d'unité
let u1 = document.getElementsByClassName("u1")
Array.from(u1).forEach(btn => { //parcours tous les items du même unité(il y a plusieurs pour le fonctionnement du carousel)
    btn.addEventListener("click", () => {
        valeur = 1; //valeur est utilisé pour le nombre de l'unité
        // appèle la fonction pour afficher les données
        selectdonnees();
    })
})

let u2 = document.getElementsByClassName("u2");
Array.from(u2).forEach(btn => {
    btn.addEventListener("click", () => {
        valeur = 2;
        selectdonnees();
    })
})
let u3 = document.getElementsByClassName("u3");
Array.from(u3).forEach(btn => {
    btn.addEventListener("click", () => {
        valeur = 3;
        selectdonnees();
    })
})
let u4 = document.getElementsByClassName("u4");
Array.from(u4).forEach(btn => {
    btn.addEventListener("click", () => {
        valeur = 4;
        selectdonnees();
    })
})
let u5 = document.getElementsByClassName("u5");
Array.from(u5).forEach(btn => {
    btn.addEventListener("click", () => {
        valeur = 5;
        selectdonnees();
    })
})

let valeur, count;


// Fonction pour mettre les données
function selectdonnees() {
  // Mettre titre et description du cours
    titre = Ultimatearray[valeur - 1][0][0][1]
    document.getElementById("titre1").innerHTML = titre;
    desc = Ultimatearray[valeur - 1][0][0][0]
    document.getElementById("description").innerHTML = desc;
    iteml.innerHTML = ""
    txt = iteml
    count = 1 //count est utilisé pour choisir entre 0 - description, 1 - lecons, 2 - travaux, 3 - formatifs
    // Parcour et paste pour chaque lecon
    Ultimatearray[valeur - 1][1].forEach(paste)
    itemt.innerHTML = ""
    txt = itemt
    count = 2
    // Parcour et paste pour chaque travail
    Ultimatearray[valeur - 1][2].forEach(paste)
    itemf.innerHTML = ""
    txt = itemf
    count = 3
    // Parcour et paste chaque formatif
    Ultimatearray[valeur - 1][3].forEach(paste)
}
function paste(item, index) {
  // Crée un li
  var li = document.createElement("li");
  // Crée un a
  var aref = document.createElement("a");
  // Attribuer le texte et le lien correspondant
  aref.textContent = Ultimatearray[valeur -1][count][index][0]
  aref.setAttribute('href', Ultimatearray[valeur -1][count][index][1])
  // Mettre a -> li -> txt
  li.appendChild(aref)
  txt.appendChild(li)
}

// array de 4 dimensions qui va unité -> description/lecons/travaux/formatifs -> nom/lien/description
let Ultimatearray = [
    [
        [
            ["", "Unité 1"]
        ],
        [
          ["L'algorithme", "https://docs.google.com/document/d/1xLv2sTN8tFaHyyGGRJvMSJxW-pjZ4HVZDiSsnEOnKAU/edit?usp=sharing"],
          ["Lucid Chart", "https://docs.google.com/document/d/1FLf8KaU-DHFo5eo56J4fS6nv-a7Ze6OrEzvblnpet0Y/edit?usp=sharing"],
          ["Le code binaire et l'ordinateur", "https://drive.google.com/file/d/10twjbW1uOnuuqhMfoM1o-O4vzwveYI2E/view?usp=sharing"],
          ["Décimal et binaire", "https://fr.khanacademy.org/math/cycle-3-v2/xd83da73b6a4e46c4:nombres-et-calculs-nombres-entiers/xd83da73b6a4e46c4:numeration-binaire/v/number-systems-introduction"],
          ["Convertir un décimal en binaire", "https://www.youtube.com/watch?v=6YI8A8oeVLw"],
          ["Les logiciels malveillants", "https://docs.google.com/document/d/1pxXSQ4RlA3RIoG3oyrRb4aZEu-5L6_ZN8WYiwvshiTU/edit?usp=sharing"],
          ["Les anti-virus", "https://docs.google.com/document/d/1g9ZnLRTWCinZfj5GMlnoE-x65_jTE_5Bgcg40Ek2oow/edit?usp=sharing"],
          ["Cybersécurité informatique", "https://docs.google.com/document/d/1AGcvYiLCy5caEnX_QkAWukzGpIG11Ns8aAKt6P5M-wQ/edit?usp=sharing"]
        ],
        [
          ["Devoir 1", "https://docs.google.com/document/d/15cibqYH-vQ862Zji29lNBI3JKJb_F9oVJS1hNnU6Dlg/edit?usp=drive_link"],
          ["Devoir 2", "https://docs.google.com/document/d/1yb3YJYzclMKJ9__vaeoruyHLHyKD4zkSMTCzx6NYOtw/edit?usp=drive_link"],
          ["Devoir 3", "https://docs.google.com/forms/d/1dph1iUk1pbSQJFC52eNhkHdkg5E7pVsefSsyWCkpRnQ/edit"],
          ["Devoir 4", "https://docs.google.com/document/d/1D_zGMCTuWEkGyEgDVxxyrM8CTx8uP7wcg2BaOMvPN6w/edit?usp=sharing"],
          ["Devoir 5", "https://docs.google.com/document/d/1onCJxH-awjvYVuTbbjHs8XYPgGKwKIsXzrWIMakpdkE/edit?usp=sharing"],
          ["Devoir 6", "https://docs.google.com/document/d/1LmHi8xLtwaV1ocIwOCJxOHxvHRZJxUcaZy1o4mq14o0/edit?usp=sharing"],
          ["Le projet de l'unité 1", "https://docs.google.com/document/d/1E-Xhrsl8iedoQIbLERNKYe5Lv3RzM6fuQoFLHM2YCq0/edit?usp=sharing"]
        ],
        [
          ["Formatif", "https://docs.google.com/document/d/1BXbsEDb4pYO88sIECr2bFfn9inYEOi75BEmsVMRMVos/edit?usp=sharing"],
          ["Formatif Corrigé", "https://docs.google.com/document/d/1vYbz-E8c2GHzk0CmB74zbfGN_IQ6NBlM-7rEaI-6Gw0/edit?usp=sharing"]
        ]
    ],
    [
        [
          ["Bienvenue dans le monde de la programmation. Vous allez apprendre de la programmation avec le langage de Visual Basic.Net. Si vous le désirez, vous pouvez télécharger la version gratuite du logiciel en cliquant le lien suivant. Voici ce que vous verrez dans ce chapitre: <br> - Introduction au langage de programmation <br>- Comment programmer des contrôles <br>- Introduction à des fonctions arithmétiques simples","Unité 2"]
        ],
        [
          ["L'algorithme", "https://docs.google.com/document/d/1xLv2sTN8tFaHyyGGRJvMSJxW-pjZ4HVZDiSsnEOnKAU/edit?usp=sharing"],
          ["Convention de nomination des contrôles", "https://docs.google.com/document/d/1MndHNtMfRz6ikFt73add453_vX02CaJ3JqGUBOlKu0U/edit?usp=sharing" ],
          ["Tout sur les variables", "https://docs.google.com/document/d/1WhvWfJGAJWEJnX9FyjDkGK2YHx6k5r1Z54lE083HEoc/edit?usp=sharing"],
          ["Variable locale ou globale", "https://docs.google.com/document/d/1MrEOZkvBzGiITnkpc-GjoRWJVOW7G7hRikV9NpIqq3M/edit?usp=sharing"],
          ["Concaténation de chaînes", "https://docs.google.com/document/d/1iAiYNGq0PIAGSZ3H14Ytllb4F-K2VNJpcZ88uOLIFf0/edit?usp=sharing"],
          ["Opérateurs arithmétiques", "https://docs.google.com/document/d/1Af_T3ZIELja47lMlZoXis4o8wFlhQy2wkXEL9z7wl4Q/edit?usp=drive_link"],
          ["Structure conditionnelle If", "https://docs.google.com/document/d/1p4LffX2mTbn8luJQky3OzwUFwzC8KiK5gS5Hju9F-XA/edit?usp=drive_link"],
          ["...MsgBox", "https://docs.google.com/document/d/1gO2_pzE6Fuvm6BRV-gXGqlWkrZ88rDYr4vGAbrlTRKo/edit?usp=sharing"],
          ["Utiliser un MsgBox", "https://www.youtube.com/watch?v=4o2UZWv2ix0&list=UUj2-luBsHojQoyAQDT8mQhg&index=103"],
          ["Comment obtenir un resultat du MsgBox", "https://www.youtube.com/watch?v=XjJ05Fivi5c&list=UUj2-luBsHojQoyAQDT8mQhg&index=111"],
          ["Conversion d'une chaîne de caractères","https://drive.google.com/open?id=1XYR-kjuRJtzIG2Nlp_ecnKhpzis4qzpI&authuser="]
        ],
        [
          ["Travail 1 : Première interface", "https://docs.google.com/document/d/1i8X3ZS2-5faz6i83ykFOXgDQcfpjBrmeR7mtAe9-viE/edit?usp=sharing"],
          ["Travail 2 : ComboBox et TextBox", "https://docs.google.com/document/d/1TCpLoxwLNRARV4DLdeglVWOC6aMLgs3nuLD7-H9B9fA/edit?usp=sharing"],
          ["Travail 3 : Champ de saisie", "https://docs.google.com/document/d/1-eNaU73MvSMgg0Qh9rqt_ZJxbclDnYJFswpTr0pd30E/edit?usp=sharing"],
          ["Travail 4 : Somme de deux nombres", "https://docs.google.com/document/d/1Hh5VmZ6QKNyYVL_vT2jqiDXDjalqqZxxhvhrWHuZvmo/edit?usp=sharing"],
          ["Travail 5 : Calculatrice simple", "https://docs.google.com/document/d/1_bMQKv0Uw-m8MScPBxehzNxPp4ctnAqj2FH40UOIbuE/edit?usp=sharing"],
          ["Travail 6 : Acte de naissance", "https://docs.google.com/document/d/1sB-8d81a_mAFgvLs1er0pRS7Lx5OrTQdQ52_ZCeBDL8/edit?usp=sharing"],
          ["Travail 7 : Calcul de la moyenne", "https://docs.google.com/document/d/1M8figV23rPfuehFWGlX3DygMQd0yyJGmWmXyQpSMuUc/edit?usp=sharing"],
          ["Travail 8 : Maths", "https://docs.google.com/document/d/1kubE79KXeycq2zoicTSgZnZC7afskzrUd4h9v5Xt8ZA/edit?usp=sharing"],
          ["Travail ******: Calculatrice avancée","https://drive.google.com/open?id=1510rv5zOueBhSH3Eh8ZU0dGu3p39I6ki&authuser=0"]
        ],
        [
          ["Aire carré  ou rectangle :", "https://drive.google.com/file/d/15xV-xDA6zGnl3Xf_zU309tQn8UxnSO42/view?usp=drive_web&authuser=0"],
          ["Aire cercle :", "https://drive.google.com/open?id=1OMNcoaIGRndGCqFf-SJn8v6CA8UP0FgG&authuser=0"],
          ["Périmètre :", "https://drive.google.com/open?id=1cLES78vO8XoNcH60umdh7MpzjY-RpNRa&authuser=0"],
          ["Format des nombres, des dates et du temps","https://drive.google.com/a/cepeo.on.ca/file/d/1ZDvSXVfWRiXMpZMuT1IvoMw4SO0hfhtz/view?usp=drive_web&authuser=0"],
          ["Formatif Unité 2 Théorique", "https://drive.google.com/file/d/1PKuAcGm4fiY4ITTRAWQNv3jAnRn6ufS5/view?usp=drive_web&authuser=0"],
          ["Formatif pratique de l'unité 2", "https://docs.google.com/document/d/18ampfcXZQhiVJ-uMfLFtKqGkTxm0qLLIq7ivJ3hLJ7w/edit?usp=sharing"]
        ]
    ],
    [
        [
          ["Dans cette unité, vous apprendrez comment faire interagir une personne avec votre application. Vous verrez comment: <br>- Utiliser les structures de condition et de décision <br>- Utiliser des boucles de répétition <br>- Manipuler différents types de variables <br>- Utiliser des fenêtres surgissantes de messages <br>- Utiliser des fenêtres pour entrer donner de l'information à votre application", "Unité 3"]
        ],
        [
          ["Select Case", "https://docs.google.com/document/d/1fivRVfsYqv-WnfdogblC5tIE4RGOFG8mvqulvECu6vA/edit?usp=sharing"],
          ["Ton âge avec calculs", "https://drive.google.com/file/d/1bFUlxcxK8xUQN3FkotiIIMz0hMfjOk3K/view?usp=drive_web&authuser=0"],
          ["...Inputbox", "https://docs.google.com/document/d/1gspTeZzoSicBw1N7s9FUq-7_jzi9hJwVcuvd29etZmY/edit?usp=sharing"],
          ["Les boucles", "https://docs.google.com/document/d/1qGbrcgOfylsMBiTbP0UK9HL0f5KRnvj9hGWaikNpFYA/edit?usp=sharing"],
          ["Boucle for", "https://www.youtube.com/watch?v=gAOywuBWAMw&list=UUj2-luBsHojQoyAQDT8mQhg&index=120"],
          ["Les ListBox", "https://docs.google.com/document/d/1gspTeZzoSicBw1N7s9FUq-7_jzi9hJwVcuvd29etZmY/edit?usp=sharing"],
          ["Vidéo ListBox", "https://www.youtube.com/watch?v=6ArvjN8G8HQ&list=UUj2-luBsHojQoyAQDT8mQhg&index=127"],
          ["Comment utiliser ListBox", "https://www.youtube.com/watch?v=6ArvjN8G8HQ&list=UUj2-luBsHojQoyAQDT8mQhg&index=127"],
          ["SelectedItem de la ListBox", "https://docs.google.com/document/d/1ySL8gV1iQb3KQEkV3Cb7LRY0Bnw2kqvbx7KgrPZP_NQ/edit?usp=sharing"]
        ],
        [
          ["Travail 1 : Ton âge", "https://docs.google.com/document/d/1FeW8GzMCykmrLpVfn2bN8BIaCSc0WLG5jQrUMT4U5a0/edit?usp=sharing"],
          ["Travail 2 : Select Case le Score", "https://docs.google.com/document/d/1M-O3WmIBrM-rna2rTM_Dwpwbl8_avgSQrD7bT3OxUlk/edit?usp=sharing"],
          ["Travail 2 :  Parité", "https://docs.google.com/document/d/12BwL4Re3YRDjbyoYqEPgB0nfWbMNTi4N0g_H-60d-2k/edit?usp=sharing"],
          ["Travail 3 : Liste de nombres", "https://docs.google.com/document/d/1SH4RwsJmvJ4Vhe5zyL7D9AmHpWdKEpjZKwvHPkDR2P0/edit?usp=sharing"],
          ["Travail 4 : Une Liste à remplir", "https://docs.google.com/document/d/1_yy90yutFnNZZLmSb9ZLbVNhtatdWnz2J79ddVEjZnk/edit?usp=sharing"],
          ["Travail 5 : Liste numérotée", "https://drive.google.com/file/d/1xp40O3YGqUFgp4Jf96I81W0st7A_9myO/view?usp=sharing"],
          ["Travail 6 : Table de multiplication", "https://docs.google.com/document/d/1P2Y2e_Tq-zHPc1KE0u4J4I1DJ29KwYz3pOvWh43i1s0/edit?usp=sharing"],
          ["Travail 7 : Supprimer des éléments", "https://docs.google.com/document/d/1JnTFeVdNZujbEkQpPK7AugAhlMFoZgk3Bth7jb7PmpI/edit?usp=sharing"],
          ["Travail 8 : Déplacement selon l'âge", "https://docs.google.com/document/d/1SU_VGmlT4hz9GQtwz8A4pCoiRzAjYxR7is3tNU4hSHk/edit?usp=sharing"],
          ["Travail 9 : Des couleurs dans une ListBox", "https://docs.google.com/document/d/1OHZSY9ZCNTVd_q8AfGlbPHVBjkPJS4HhyPUcFV7Dblc/edit?usp=sharing"]
        ],
        [
          ["Unité 3 : formatif théorique  lien de quiz", "https://quizizz.com/admin/quiz/5ecd69222a4a40001bc7352e/vbnet"],
          ["Formatif théorique", "https://docs.google.com/document/d/1iazmkfMS0YTJ1rMmP80WPfBP2iTYcxI6FnTncHluoag/edit?usp=sharing"],
          ["Corrigé formatif théorique", "https://docs.google.com/document/d/1lgHqFfTmGOJc8C0HYlKDQf4ESBvJ4ctqc-xunZR37n8/edit?usp=sharing"],
          ["Unité 3 : Formatif pratique obligatoire", "https://docs.google.com/document/d/1pDCXs_HNQiNXR2nBiOYDdZNaP0gXiVd1aEKrDI54lX0/edit?usp=sharing"]
        ],
    ],
    [
        [
          ["Dans cette unité, tu apprendras comment utiliser les menus et changer les couleurs d'un form par la programmation. <br>Tu vas commencer à manipuler les images avec les PictureBox, tu vas aussi apprendre à utiliser des variables de types aléatoire. <br>Enfin, le plus important, tu vas faire de l'animation avec le contrôle Timer.", "Unité 4"]
        ],
        [
          ["Variable aléatoire", "https://docs.google.com/document/d/1RKYBKjrJOy6TDIQK5hvNvL4rr2ZpcslQ7vzn-uOQ3ZQ/edit?usp=sharing"],
          ["Insérer une image comme contrôle", "https://docs.google.com/document/d/1CgR5t0A7kdboLJm2MnEbUepkPkdpvm4d-PzzSVggHTk/edit?usp=sharing"],
          ["MenuStrip", "https://docs.google.com/document/d/192nWai9I_xI__cGKN2_m-9qi62vsVItrqEEj60NCAoM/edit?usp=sharing"],
          ["Dimension d'un écran", "https://docs.google.com/document/d/1iX8zOV_BHGHx_N6yF1s43W_zlAxpXXWlXEOPwKQdTtQ/edit?usp=sharing"],
          ["Insérer un Timer dans ton projet", "https://drive.google.com/open?id=19A6Jhgd_O1Co-vSrOpGnHunDUPbRPTrB&authuser=0"]
        ],
        [
          ["Travail 1 : Jeu de devinette", "https://docs.google.com/document/d/1iX8zOV_BHGHx_N6yF1s43W_zlAxpXXWlXEOPwKQdTtQ/edit?usp=sharing"],
          ["Travail 1 : Calculer la Température", "https://docs.google.com/document/d/1bd8k82i7Teq01CsI8KNxtzQajCPPh2hPTEEq-WMqzMU/edit?usp=sharing"],
          ["Travail 2 : Menu de restaurant", "https://docs.google.com/document/d/15h_lSK4HM1Vnz9MJbNP4KmKDdhXUNvds9YeeKnNqg-g/edit?usp=sharing"],
          ["Travail 3 : Gains ou perte", "https://docs.google.com/document/d/19FtU3xOwGi8sPO4fifYwN_aCL5Ma30e5ODRAM8oWZHo/edit?usp=sharing"],
          ["Travail 4 : On avance un peu", "https://docs.google.com/document/d/1_4qFHDyheg66vsECLL4EbF0fXR6K4XTxSklFwL_gGRc/edit?usp=sharing"],
          ["Travail 5 : On se déplace", "https://docs.google.com/document/d/1L_OikZiPeyHTWchwi_p_8SV30NL94hynEnUgT2XjrCE/edit?usp=sharing"],
          ["Travail 6 : Aller-Retour", "https://docs.google.com/document/d/1R8Sb_28bjrYBCzbIXwhUlpdnX7igz0dxo3YVTqA96rU/edit?usp=sharing"],
          ["Travail 7 : Le ballon de soccer", "https://docs.google.com/document/d/1FXC1KDTigO_siwyAcQNH3UhYWV2ZL1z0jyVP9OvvOJ8/edit?usp=sharing"],
          ["Travail 8 : Match de soccer Partie 1:", "Le réchauffementhttps://docs.google.com/document/d/1N7ZXhHnKxbu1bVDhAl5c1nsfyYORaFvfkxS2-ecGVLI/edit?usp=sharing"],
          ["Travail 8 : Match de soccer Partie 2:", "Driblerhttps://docs.google.com/document/d/1ay8r6bjB2GaERe2993MuB3eJ3Ml7kPy9jsJ0Lvmbe5o/edit?usp=drive_link"],
          ["Travail 8 : Match de soccer Partie 2: Jouer(le point milieu)", "https://docs.google.com/document/d/1gzHOjCRBPc7Qwc_sAQrY6NVjKEw_MpyioMiNHDWg5cA/edit?usp=sharing"],
          ["Travail 8 : Barre de défilement", "https://drive.google.com/file/d/1jeiSfhfjEc09ATyyD7rv1Niaa1TWqQd1/view?usp=drive_web&authuser=0"]  
        ],
        [
          ["Formatif de l'unité 4 : Tap Touche", "https://docs.google.com/document/d/1JYkVONTh3z5unazOr3ysK2UG1vfCz5hcfVwHd80i4wc/edit?usp=sharing"]
        ],
    ],
    [
        [
          ["- Concevoir des programmes utilisant des variables et des expressions pour manipuler des nombres et des chaînes de caractères <br>- Développer des programmes utilisant une structure de décision incluant au moins deux choix possibles pour répondre à un problème donné <br>- Développer des programmes utilisant une ou plusieurs boucles avec ou sans compteur. <br>-Appliquer des mouvements aux objets en utilisant les Timers", "Unité 5"]
        ],
        [
          ["KeyDown ne fonctionne avec bouton", "https://docs.google.com/document/d/1uuF1ggdb1uF7TzjHHi7MpQFfaypyO3fWY3GBZXXSC78/edit?usp=sharing"],
          ["Événements Clavier dans VB.Net", "https://docs.google.com/document/d/1ifxLvi00w01gKvSTvvQtFu5JuIVI__05ZcrUNTpE0_k/edit?usp=sharing"],
          ["Variable et fonction booléenne", "https://docs.google.com/document/d/1ifxLvi00w01gKvSTvvQtFu5JuIVI__05ZcrUNTpE0_k/edit?usp=sharing"],
          ["Ajouter un deuxième Form", "https://docs.google.com/document/d/1Qo6DHyFtR89A4F4riR1DWBIsSwA5rbepwniGLAru4bc/edit?usp=sharing"],
        ],
        [
          ["Travail 1 : Bouge Mario !!..!!!", "https://docs.google.com/document/d/1zcgQ37RnRVw8N7KV-xHxIIHPOZ0ON8fTVMOAlkgZ8FU/edit?usp=sharing"],
          ["Travail 2 : Chronomètre", "https://docs.google.com/document/d/1M7KEAeTvEpGuVxS08Lo40lLskjqhz6gSzLR4oeqGuy0/edit?usp=sharing" ],
          ["Travail 3 : Feux de circulation", "https://docs.google.com/document/d/1c7cJ3juIxEAx0zk3sPFAXraBCFtMkJfp0P2OpoxXvW0/edit?usp=sharing"],
          ["Travail 4 : Labyrinthe Niveau 1", "https://docs.google.com/document/d/1-R1rQkdetQVmUIrDrkPY35R5tq7SSYTy4knqLFgVdZ4/edit?usp=sharing"],
          ["Travail 5 : PacMan", "https://docs.google.com/document/d/1YopytI4U52n_nXGBmhDZo3kA0PyDEkvnkhtz7Dl1k6Y/edit?usp=sharing"]
        ],
    ]
]