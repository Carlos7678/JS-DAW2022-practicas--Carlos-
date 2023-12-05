enum Dias {
    Lunes=4, 
    Martes, 
    Miercoles, 
    Jueves, 
    Viernes, 
    Sabado, 
    Domingo, 
  }
  
  console.log(Dias.Martes) 

  function imprimirSaludo(mensaje:string, dia:Dias):void {
    console.log(`${mensaje}, hoy es ${dia}. Feliz 2022!`);
  }
  
