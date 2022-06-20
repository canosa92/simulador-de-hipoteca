//Primero vamos a llamar a los valores del HTML que necesitamos

//Definimos las variables que usaremos dentro de la funcion y que nos hara falta más tarde

//creamos la funcion
function calcularahorro () {
  const Importevivienda = parseFloat(document.getElementById("Vivienda").value);
  const totalahorro = document.getElementById("ahorro");
  const totalfinanciar = document.getElementById("totalresta");
  const Financiar= document.getElementById("Financiar");
  const Financiar20=document.getElementById("Financiar20");
  const Financiar30=document.getElementById("Financiar30");
  const Financiar40=document.getElementById("Financiar40");
  
  //Volvermos a hacer la operacion
  let ahorro = (Importevivienda*35)/100
  let nofinancia= (Importevivienda*20)/100
  let afinanciar= Importevivienda - nofinancia    
  //Añadimos los resultados al HTML
  totalfinanciar.textContent = afinanciar.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
  totalahorro.textContent = ahorro.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
  Financiar.textContent= afinanciar.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
  Financiar20.textContent=afinanciar.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
  Financiar30.textContent=afinanciar.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
  Financiar40.textContent=afinanciar.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
  };
  
  // ahora calculamos los años y meses que tendran que pagar
  
  function calcularedad (){
  
     let años = parseInt(document.getElementById("edad").value);
    let añosFinanciar =document.getElementById("añosfinancia")
    let mesesFinanciar = document.getElementById("meses")
    let MesesTotal= document.getElementById("MesesTotal")
    let AñosTotal= document.getElementById("añosTotal")
  
    let edad =  70 - años
    let meses = edad * 12  
    
  añosFinanciar.textContent= edad.toFixed(0)
    AñosTotal.textContent=edad.toFixed(0)
    //Calculamos los meses que nos financia
   mesesFinanciar.textContent=meses.toFixed(0)
   MesesTotal.textContent=meses.toFixed(0)
    
    if (edad <= 20&& edad >0) {
      alert("Un poco tarde para buscar una hipoteca,¿no crees?")
    } else if (edad <= 0){
        alert("No creo que debas estar mirando simuladores de hiporteca a tu edad")
      }else if (edad >= 52) {
        alert("No tienes edad para que te den una hipoteca")
      } else if( edad >= 20 &&  edad < 52){
         alert("Buen momento para buscar una hipoteca")
      }  
   
  }
   //vamos a ponernos a calcular el endeudamiento
  
  
  function CalcularEndeudamiento() {
    //Definimos las variables again
    let sueldo1=parseInt(document.getElementById("sueldo1").value);
    let sueldo2=parseInt(document.getElementById("sueldo2").value);
    let deudas=parseInt(document.getElementById("deudas").value);
    let cuotaMax=document.getElementById("cuotaMax");
    //Realizamos las operaciones
    let totalPersona= (sueldo1+sueldo2)-deudas
    let CuotaMaxima=(totalPersona*35)/100
    //Las pasamos al HTML
    cuotaMax.textContent=CuotaMaxima.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
  }
  //
  
  function calcularhipoteca(){
    //Calculamos la cupta con la edad que le dio al usuario
    // Llamamos a los elementos para calcular y mostrar los resultados con los datos del usuario
    const Importevivienda = parseFloat(document.getElementById("Vivienda").value);
    let interesAnual=parseFloat(document.getElementById("interes").value);
    let cuotaEdad=document.getElementById("cuotaEdad");
    let totalPagarEdad=document.getElementById("totalpagarEdad")
    //pegamos los calculos realizados con anterioridad
  let nofinancia= (Importevivienda*20)/100
  let afinanciar= Importevivienda - nofinancia 
  let años = parseInt(document.getElementById("edad").value); 
  let edad =  70 - años
  let meses = edad * 12  
  
  //Calculamos ahora el interes anual, la cuota y el total 
    let interes= (interesAnual/100) /12
    let cuotaFinal = afinanciar / (( (1 - ( 1 + interes) ** -meses)) / interes)
    let pagado = cuotaFinal * meses
    //Lo añadimos al HTML
    cuotaEdad.textContent=cuotaFinal.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
    totalPagarEdad.textContent=pagado.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
  
    //Ahora vamos a calcular la cuota a 20 años
    //Definimos  las variables,donde se mostrara el resultado
    let cuota20=document.getElementById("cuota20");
    let totalPagar20=document.getElementById("totalpagar20")
    let totalmeses20=document.getElementById("Meses20")
    let años20=document.getElementById("Años20")
    let meses20 =20*12
    let cuotaFinal20 = afinanciar / (( (1 - ( 1 + interes) ** -meses20)) / interes)
    let pagado20 = cuotaFinal20 * meses20
  
    años20.textContent=20
    cuota20.textContent=cuotaFinal20.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
    totalPagar20.textContent=pagado20.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
    totalmeses20.textContent=meses20
  
  
    //Ahora vamos a calcular la cuota a 30 años
    //Definimos  las variables,donde se mostrara el resultado
    let cuota30=document.getElementById("cuota30");
    let totalPagar30=document.getElementById("totalpagar30")
    let totalmeses30=document.getElementById("Meses30")
    let años30=document.getElementById("Años30")
    let meses30 =30*12
    let cuotaFinal30 = afinanciar / (( (1 - ( 1 + interes) ** -meses30)) / interes)
    let pagado30 = cuotaFinal30 * meses30
   
    años30.textContent=30
    cuota30.textContent=cuotaFinal30.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
    totalPagar30.textContent=pagado30.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
    totalmeses30.textContent=meses30
  
     //Ahora vamos a calcular la cuota a 40 años
    //Definimos  las variables,donde se mostrara el resultado
    let cuota40=document.getElementById("cuota40");
    let totalPagar40=document.getElementById("totalpagar40")
    let totalmeses40=document.getElementById("Meses40")
    let años40=document.getElementById("Años40")
    let meses40 =40*12
    let cuotaFinal40 = afinanciar / (( (1 - ( 1 + interes) ** -meses40)) / interes)
    let pagado40 = cuotaFinal40 * meses40
  
  totalmeses40.textContent=meses40
    años40.textContent=40
    cuota40.textContent=cuotaFinal40.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
    totalPagar40.textContent=pagado40.toLocaleString('de-DE',{style:'currency',currency:'EUR'})
    }
  
