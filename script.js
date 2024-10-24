const modal=document.getElementById("mainModal");

const openModal=()=>{
  					modal.showModal();
                    }


const closeModal=()=>{
  modal.close();
  
}

const modalAsesorias=document.getElementById("dlgModalAsesorias");
const openModalAsesorias=()=>{
  					modalAsesorias.showModal();
                    }
                    
const closeModalAsesoria=(x)=>{
  x.close();
}



const modalTiquet=document.getElementById("dlgModalTiquet");
const openNuevoTiq=()=>{
  					modalTiquet.showModal();
                    }
                    
const closeModalGenerico=(x)=>{
  if (confirm("desea cerrar la ventana  ?")){
     x.close();  
  }
  
}

function abreModal(qm)
{
 qm.showModal();
}


                    

