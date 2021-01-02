let answerInvitation= document.getElementById ('answer-invitation');
let answerFile= document.getElementById ('answer-file');
let answerPassword= document.getElementById ('answer-password');
let answerSubscription= document.getElementById ('answer-subscription');
let answerSupport= document.getElementById ('answer-support');
let invitation= document.getElementById ('invitation');
let file= document.getElementById ('file');
let password= document.getElementById ('password');
let subscription= document.getElementById ('subscription');
let support= document.getElementById ('support');

let abierto=false;

function ocultarRespuesta (elemento){
	elemento.style.display=`none`;
	abierto=false;
}
function mostrarRespuesta(elemento){
		elemento.style.display='inline';
		abierto=true;	
}

 
ocultarRespuesta(answerInvitation);
ocultarRespuesta(answerFile);
ocultarRespuesta(answerPassword);
ocultarRespuesta(answerSubscription);
ocultarRespuesta(answerSupport);

let showInvitation 	= document.getElementById ('show-invitation');
let showFile 		= document.getElementById ('show-file');
let showPassword 	= document.getElementById ('show-password');
let showSubscription= document.getElementById ('show-subscription');
let showSupport 	= document.getElementById ('show-support');



/*Muestro y oculto la respuesta con un click*/
invitation.onclick = function() {
	if (abierto){
		ocultarRespuesta(answerInvitation);
		showInvitation.style.transform=' rotate(0deg)';

	}
	else{
		mostrarRespuesta(answerInvitation);
		showInvitation.style.transform=' rotate(180deg)';
		invitation.style.fontWeight='700';
		
		
	}
};
file.onclick = function() {
	if (abierto){
		ocultarRespuesta(answerFile);
		showFile.style.transform=' rotate(0deg)';


	}
	else{
		mostrarRespuesta(answerFile);
		showFile.style.transform=' rotate(180deg)';
	}
};
subscription.onclick = function() {
	if (abierto){
		ocultarRespuesta(answerSubscription);
		showSubscription.style.transform=' rotate(0deg)';
	}
	else{
		mostrarRespuesta(answerSubscription);
		showSubscription.style.transform=' rotate(180deg)';
		
	}
};
support.onclick = function() {
	if (abierto){
		ocultarRespuesta(answerSupport);
		showSupport.style.transform=' rotate(0deg)';
	}
	else{
		mostrarRespuesta(answerSupport);
		showSupport.style.transform=' rotate(180deg)';
		}
};
password.onclick = function() {
	if (abierto){
		ocultarRespuesta(answerPassword);
		showPassword.style.transform=' rotate(0deg)';
	}
	else{
		mostrarRespuesta(answerPassword);
		showPassword.style.transform=' rotate(180deg)';
		
	}
};



