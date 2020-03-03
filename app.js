// DOM - Document Object Model
 /*
let n;

n = document;
n = document.all
n = document.all[1]
n = document.head
n = document.title
n = document.URL

//Style

let liste;
liste = document.querySelector('li');
liste = document.querySelector('li:nth-child(3)');

liste.style.color = "red";
liste.style.backgroundColor = "blue";



liste = document.querySelectorAll('ul li')
liste[1].style.color = "red"

for(var i=0; i <liste.length; i++){
   // liste[i].style.backgroundColor ="blue"
   liste[i].style.cssText ="color : #fff; background-color:green"
}



let n;
n = document.getElementById('course-liste')
n.textContent = "Coucou"
n.style.color = "red"

console.log(n);
console.log(liste);

let m;
m=document.getElementById('liste');
m.innerHTML
m.innerHTML = "<h3>Coucou</h3>"



let liste;
liste = document.getElementsByClassName('collection-item')
liste [1].style.color = "red"
liste [2].textContent = "des fraises"

for (var i=0; i<liste.length; i++){
    liste[i].style.color = "red"
}

console.log(liste);


//Nodelist

let n = document .querySelectorAll("li")
console.log(n[1]);

n.forEach(function(li){
li.style.backgroundColor = "green"
}
)

//HTMLCollection

let n = document.getElementsByTagName("li")

/*n.forEach(function(li){
    li.style.backgroundColor = "green"
    }
    )

   
    for (var i = 0; i < n.length; i++){
        n[i].style.backgroundColor = "green"
    }


Array.from(n).forEach(function(li){
    li.style.backgroundColor = "red"
})


console.log(n);


const h3 = document.querySelector("h3")

h3.onclick = function(){
    console.log("coucou");
    
}

h3.onmouseover = function( )

//CREER UN EVENEMENT SAVE

function save (){
    let tache = document.getElementById('tache').value;
    localStorage.setItem('nameTask', tache)
}

// CREER UN EVENEMENT REMOVE

function remove(){
    document.getElementById('tache').value = '';
    localStorage.removeItem('nameTask')
}


const lienGoogle = document.getElementById('google')
const cg = document.getElementById('cg')

lienGoogle.addEventListener('click', function(e){
    if (!cg.checked){
        e.preventDefault()
    }
    
})
*/

// DEFINIR L'INTERFACE

const form = document.querySelector('#course-form')
,            listeTache = document.querySelector('.collection')
,            supprimerListe = document.querySelector('.supprimer-course')
,            contenuTache = document.querySelector('#contenuTache')
,            filtrer = document.querySelector("#filter");

//APPLICATION 
maListeDeTache()

function maListeDeTache(){
//Ajouter un évènement
    form.addEventListener('submit', ajouterUneTache);

 //Supprimer une tache
    listeTache.addEventListener('click', supprimerUneTache);
 
 //Nettoyer la liste de taches  
    supprimerListe.addEventListener('click', nettoyerLaListe);


//Filtrer les tâches
    filtrer.addEventListener('keyup', filtrerLesTaches);

}



//Ajouter une tache


function ajouterUneTache(e){
    if (contenuTache.value ===''){
        alert ('Ajouter une tâche')
    }
// Ajouter une balise
const li = document.createElement('li');


//Ajouter une class dans <li>
li.className = "collection-item";

//Relier le contenu du formulaire dans <li>
li.appendChild(document.createTextNode(contenuTache.value));

//Créer un lien
const link = document.createElement('a');

//Ajouter une class à <a>
link.className = 'delete-item secondary-content';

//Ajouter l'icone
link.innerHTML = '<ion-icon name="close-circle"></ion-icon';

//Relier <a> dans  le <li>
li.appendChild(link);

//Relier  <li> à <ul>
listeTache.appendChild(li);

contenuTache.value = '';

    e.preventDefault()

}

//Supprimer une tache


function supprimerUneTache(e){
    if (e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Voulez-vous vraiment supprimer ?'))
        e.target.parentElement.parentElement.remove();
        
    }
}

//Nettoyer la liste de tâches

function nettoyerLaListe(){
    listeTache.innerHTML = ''
}

//Filter

function filtrerLesTaches(e){
   const contenuClavier = e.target.value.toLowerCase()

    document.querySelectorAll('.collection-item').forEach(
        function(tache){
            const motCle = tache.firstChild.textContent;
            if (motCle.toLocaleLowerCase().indexOf(contenuClavier) !=-1){
                tache.getElementsByClassName.display ='block'
            }else{
                tache.style.display = 'none'
            }
        }
    );

   console.log(contenuClavier);
   
}