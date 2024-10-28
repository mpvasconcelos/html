// Escribir aqui el código Javascript

function nombres(){
  
  return ["Maria","Luis","Luisa","Alicia","Jose"];
 /* ["Maria","Luis","Luisa","Alicia","Jose","Hali","Bernardo","Salomon","Benito","Sofia","Armando","Andres","Lucia","Carmen","Isabel","Rafael","Rafaela","Nancy","Juan","Miguel","Jazmin","Zaida","Roman","Romana","Jose","Rubicel","Milagro","Claudia","Norma","Felipe","Felipa","Casimiro","Jhonatan","Joel","Francisca","Cristell","Khali"];
 */
}

function nombresRowTbl(tbl){
  var listaN=nombres();  
  //var rowStr=defineTbl();
  
  document.getElementById(tbl).innerHTML="";
  
  listaN.forEach(function(elemento) {
      rowStr=" <tr> <td> " + elemento + " </td> </tr>";      
      document.getElementById(tbl).innerHTML= document.getElementById(tbl).innerHTML+ rowStr;
      rowStr="";
     
   
}); 
   
  
}


function defineTbl(){  
  return "<table border='1'> <thead> <tr> <th>Nombre</th> </tr> </thead> <tbody> ";
}
function closeTbl(){  
  return " </tbody>  </table> </body> </html>";
}


function verNombres(qD){
 nombresRowTbl("cuerpoTblNombre");
  qD.style.display = "block";
 // qD.style.display="refresh";
  qD.showModal();
  
}

function cerrarDlg(qD){
  qD.style.display = "none";
  qD.close();
  
}

/*  dialogo  */

function generaRowTbl(tbl){
  var listaN=nombres();  
  var listaAp=fnApellidos();
  
  document.getElementById(tbl).innerHTML="";
  
  
  listaN.forEach(function(elemento) {
      listaAp.forEach(function(elementoApPat){
      listaAp.forEach(function(elementoApMat){
          rowStr=" <tr> <td> insert into empleados(id,ap, am, nombre) values(0,'" + elementoApPat +"',''"+elementoApMat +"','"+  elemento+"'); </td> </tr>";      
          document.getElementById(tbl).innerHTML= document.getElementById(tbl).innerHTML+ rowStr;
          rowStr="";});
});
    });
    

}

function verDatos(qD){
 generaRowTbl("tblVerDatos");
  qD.style.display = "block";
 // qD.style.display="refresh";
  qD.showModal();
  
}




