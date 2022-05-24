const form = document.getElementById('form')
const nombre = document.getElementById('name')
const mail = document.getElementById('mail')
const texto = document.getElementById('texto')

form.addEventListener('submit', e=>{
	e.preventDefault();
	if(nombre.value.length == 0){
		alert("Es necesario un nombre")
	}
	if(mail.value.length == 0){
		alert("Es necesario un mail")
	}
	if(texto.value.length == 0){
		alert("Dejenos su comentario")
	}
})