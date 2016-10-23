var crono=new Object();
var ventana;
crono.empezar=function(){
crono.inicio = new Date().getTime();
if(ventana==undefined){
ventana=window.open("", "", "top=120px,left=500px,width=400,height=300");
}
ventana.document.body.innerHTML=
"00" + ":" + "00" + ":" + "00";
crono.contar();
}

//Ejecuta cada segundo la diferencia entre la fecha actual
crono.contar=function(){
var time = new Date().getTime();
diff = new Date(time-crono.inicio);
var h = diff.getUTCHours();
var m = diff.getUTCMinutes();
var s = diff.getUTCSeconds();
ventana.document.body.innerHTML=
crono.formatear(h) + ":" + crono.formatear(m) + ":" + crono.formatear(s);
crono.timer = setTimeout(crono.contar, 1000);
}

//Añade mas 0's al formato de numeros del crono
crono.formatear=function(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
}

crono.parar=function(){
  clearTimeout(crono.timer);
  ventana.document.body.innerHTML=
  crono.formatear(h) + ":" + crono.formatear(m) + ":" + crono.formatear(s);
}
crono.continuar=function(){
crono.tim=setTimeout(crono.contar, 10);
}
crono.reinicio=function(){
  clearTimeout(crono.timer);
  var h="00";
  var m="00";
  var s="00";
  ventana.document.body.innerHTML=h + ":" + m + ":" + s;
}
