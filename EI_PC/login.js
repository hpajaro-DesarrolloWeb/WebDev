var d=document;
d.querySelector('#login_boton').onclick=validar;

function validar(){
 
  el=d.getElementById("correo")
  if (el.value=="" || el.value.trim()=="") {
  	alert("El correo es obligatorio.");
    return;
  }
  emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   
    if (! emailRegex.test(el.value)) {
     alert("El correo es invalido.");
      return;
    }
  el=d.getElementById("passwd")
  if (el.value=="" || el.value.trim()==""){
  	alert("El password es obligatorio.");
  	return;
  }
   passwdRegex = /(?=^.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;
   if (! passwdRegex.test(el.value)) {
     alert("Password no cumple politica");
     return;
    }
    alert("Datos enviado correctamente");
}