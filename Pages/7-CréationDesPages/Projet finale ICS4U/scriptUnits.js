// Javascript afin d'aller chercher chaque inputs
let btnLesson = document.getElementById("ajouterlesson");
let btnActivite = document.getElementById("ajouteractivité");
let btnFormatif = document.getElementById("ajouterformatif");
let additions = document.getElementById("addition");
let additions2 = document.getElementById("addition2");
let additions3 = document.getElementById("addition3");
let activités = document.getElementById("activité");
let formatives = document.getElementById("formatif");
let title1 = document.getElementById("title1");
let input1 = document.getElementById("input1");
let submit = document.getElementById("submit");
let lessonCounter = 0;
let activitéCounter = 0;

// Créer des events listener pour chaque bouton 
btnLesson.addEventListener('click', ajouterlesson);
btnActivite.addEventListener('click', ajouteractivite);
btnFormatif.addEventListener('click', ajouterformatif);
submit.addEventListener('click', sub);

document.getElementById('titrePrincipale').textContent = "Unité #" + localStorage.getItem("unitNumber");

// Donner une longueur maximum au input
const maxLengthTitle = 22;
const maxLengthInput = 22;
// Sinon après marquer trois petit point au titre ou au lien
const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
        return text.slice(0, maxLength-3) + '...';
    }
    return text;
};

// Cette fonction est celle qui ajoute les données de chaque unité en forme JSON dans le LocalStorage,
// Pour pouvoir l'ajouter dans une fichier dans le page principale lorsqu'on clique submit
function sub(){
    let lessons = document.querySelectorAll('.lessonBox div');
    let activities = document.querySelectorAll('.actBox div');
    let formative = document.querySelectorAll('.formativeBox div');
    function createArray(category, elements) {
        let categoryArray = [];
        let categoryStr = "";
        // Ajoute le titre et les données dans une liste et retourne la
        elements.forEach((element, index) => {
            if(index == 0){
                categoryStr += category + ": ";
            }
            if (index % 2 == 0) {
                categoryStr += "[" + element.innerText+ ", ";
            } else {
                categoryStr += element.innerText + "]";
                categoryArray.push(categoryStr);
                categoryStr = "";
            }
        });
        return categoryArray;
    }
    // Ajoute les données de chaque partie (lessons, activities, formatives)
    let unitFull = [createArray("Leçons", lessons), createArray("Activities", activities), createArray("Formatives", formative)];
    localStorage.setItem("unit"+localStorage.getItem("unitNumber"), JSON.stringify(unitFull));
    // ferme la page
    close();
}

// Dans chacune des trois fonctions suivantes il ajoute les inputs de l'utilisateur,
// fait apparaître la boîte qui les contients
// et baisse le bouton qui permet d'ajouter un autre lesson ou activité
function ajouterlesson()
{
    // Montre les inputs lorsqu'ne clique et change le texte sur le boutton
    if(btnLesson.textContent=="Ajouter une leçon"){
        btnLesson.textContent="Ajouter";
        additions.hidden = false;
    }else{
        // Verifier les données
        if(title1.value != "" && title1.value != null){
            if(input1.value != "" && input1.value != null){
                // Ajoute les données de façon permenant
                lessonCounter++;
                btnLesson.textContent="Ajouter une leçon";
                let textUpdates = document.querySelectorAll('#lesson' + lessonCounter + ' div');
                textUpdates[0].textContent += truncateText(title1.value, maxLengthTitle);
                textUpdates[1].textContent += truncateText(input1.value, maxLengthInput);
                // Montre une des divs
                document.getElementById("lesson"+lessonCounter).style.display = "block";
                // Réinitializer les inputs
                title1.value = "";
                input1.value = "";
                additions.hidden = "hidden";
                if(lessonCounter==5){
                    btnLesson.hidden = true;
                }
            // Des avertissements
            }else{
                window.alert("SVP ajouter un lien vers la leçon!");
            }
        }else{
            window.alert("SVP ajouter un titre vers la leçon!");
        }
    }
}

// Meme chose qu'en haut, mais pour les activités
function ajouteractivite()
{
    if(btnActivite.textContent=="Ajouter une activité"){
        btnActivite.textContent="Ajouter";
        additions2.hidden = false;
    }else{
        if(title2.value != "" && title2.value != null){
            if(input2.value != "" && input2.value != null){
                activitéCounter++;
                btnActivite.textContent="Ajouter une activité";
                let textUpdates = document.querySelectorAll('#act' + activitéCounter + ' div');
                textUpdates[0].textContent += truncateText(title2.value, maxLengthTitle);
                textUpdates[1].textContent += truncateText(input2.value, maxLengthInput);
                document.getElementById("act"+activitéCounter).style.display = "block";
                title2.value = "";
                input2.value = "";
                additions2.hidden = "hidden";
                if(activitéCounter==5){
                    btnActivite.hidden = true;
                }
            }else{
                window.alert("SVP ajouter un lien vers l'activité!");
            }
        }else{
            window.alert("SVP ajouter un titre vers l'activité!");
        }
    }
}

// Meme chose qu'en haut, mais pour le formative
function ajouterformatif()
{
    if(btnFormatif.textContent=="Ajouter une formative"){
        btnFormatif.textContent="Ajouter";
        additions3.hidden = false;
    }else{
        if(title3.value != "" && title3.value != null){
            if(input3.value != "" && input3.value != null){
                btnFormatif.textContent="Ajouter une formative";
                let textUpdates = document.querySelectorAll('#formatif div');
                textUpdates[0].textContent += truncateText(title3.value, maxLengthTitle);
                textUpdates[1].textContent += truncateText(input3.value, maxLengthInput);
                document.getElementById("formatif").style.display = "block";
                title3.value = "";
                input3.value = "";
                additions3.hidden = "hidden";
                btnFormatif.hidden = true;
            }else{
                window.alert("SVP ajouter un lien vers le formatif!");
            }
        }else{
            window.alert("SVP ajouter un titre vers le formatif!");
        }
    }
}
