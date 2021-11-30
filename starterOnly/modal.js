function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.getElementsByClassName("close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close window modal
closeModal[0].addEventListener("click", function() {
  modalbg.style.display = "none";
});


document.forms["reserve"].addEventListener("submit", function(e) {
	 
  var erreurVille;
  var erreur;
  var inputs = this;

  if (inputs["first"].value == "" || inputs["first"].length < 2) {
    erreur = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    document.getElementById("first_erreur").innerHTML = erreur;
  }

  if (inputs["last"].value == "" || inputs["last"].length < 2) {
   erreur = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    document.getElementById("last_erreur").innerHTML = erreur;
  }

  if (inputs["email"].value == "") {
   erreur = "Veuillez renseigner votre adresse email.";
    document.getElementById("email_erreur").innerHTML = erreur;
  }

  if (inputs["birthdate"].value == "") {
    erreur = "Vous devez entrer votre date de naissance.";
    document.getElementById("birthdate_erreur").innerHTML = erreur;
  }


  if (document.querySelector('input[name="location"]:checked')){
    console.log("valeur radio"+document.querySelector('input[name="location"]:checked').value);
    } else {
      erreurVille = "Veuillez saisir une option.";
      document.getElementById("location_erreur").innerHTML = erreurVille;
    }
    
  if (inputs["checkbox1"].checked == false) {
    erreur = "Vous devez vérifier que vous acceptez les termes et conditions.";
    document.getElementById("checkbox1_erreur").innerHTML = erreur;
  } 

  if (erreur) {
    e.preventDefault();
    return false;
  } else {
    alert('Formulaire envoyé !');
  }
 
});
 
function removeWarning() {
  document.getElementById(this.id + "_erreur").innerHTML = "";
}


document.getElementById("first").onkeyup = removeWarning;
document.getElementById("last").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;
document.getElementById("birthdate").onclick = removeWarning;
document.getElementById("checkbox1").onclick = removeWarning;

