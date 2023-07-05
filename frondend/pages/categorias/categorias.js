import { getCategorias,nuevaCategorias,deleteCategorias,updateCategoria } from "./API.js";
import {generateBut,generateDot,generateButton} from "./icons.js";

addEventListener("DOMContentLoaded",()=>{
    categorias();
})



async function categorias(){
    const datosCategorias = await getCategorias();
    console.log(datosCategorias);
    
    const tabla = document.querySelector('#tabla')
 

    datosCategorias.forEach(element => {
        const butValue = generateBut();
        const dotValue = generateDot();
        const actualizar = generateButton();
        const {CategoriaID,CategoriaNombre,Descripcion,Imagen}= element
        tabla.innerHTML+=`
        <tr>
          <th scope="row">${CategoriaID}</th>
          <td><i class="${butValue}"></i></td>
          <td>
            <div class="${dotValue}"></div>
          </td>
          <td>${CategoriaNombre}</td>
          <td>${Descripcion}</td>
          <td>${Imagen}</td>
          <td ><button type="button" class="actualizar ${actualizar[0]} mx-2 " data-bs-toggle="modal" data-bs-target="#modal2" idActualizar=${CategoriaID}>Actualizar</button><button type="button"
              class="${actualizar[1]} delete" idBorrar=${CategoriaID}>Borrar</button></td>
        </tr>
        
        `
        
    });
}

const registro = document.querySelector('#regitrar')
registro.addEventListener('submit',nuevaCategoria)


function nuevaCategoria(e){
    e.preventDefault();

    const  CategoriaNombre = document.querySelector('#NombreCategoria').value;
    const  Descripcion = document.querySelector('#Descripcion').value;
    const  Imagen = document.querySelector('#imagen').value;
    console.log(CategoriaNombre);

    const registroCategoria={
        CategoriaID:1,
        CategoriaNombre,
        Descripcion,
        Imagen
    }

   if (validation(registroCategoria)) {
        alert("Todos los datos son obligatorios")
        return
    } 
    nuevaCategorias(registroCategoria)
}
function validation(Objecto){
    return !Object.values(Objecto).every(element=>element !=="")
} 


const eliminar = document.querySelector('#tabla')
eliminar.addEventListener('click',borrar)

function borrar(e){
    if(e.target.classList.contains('delete')){
        
        const idCategorias= e.target.getAttribute('idBorrar')
        console.log(idCategorias);
        const confir=confirm('Desea Eliminar al Cliente')
        if(confir){
            deleteCategorias(idCategorias)
        }

    }
}


//////////////ACTUALIZAR Estudiantes///////////


const nuevosDatos = document.querySelector('#tabla')
nuevosDatos.addEventListener('click',actualizar)


function actualizar(e){
    e.preventDefault();
  
    if(e.target.classList.contains('actualizar')){
        
        const idActualizar= e.target.getAttribute('idActualizar')
        console.log(idActualizar);

        const datosNuw = document.querySelector('#actualizar')
        datosNuw.addEventListener('submit',uppdateCategoria)
    
    function uppdateCategoria(e){
        e.preventDefault();
        
        const  CategoriaNombre = document.querySelector('#NombreCategoria2').value;
        const  Descripcion = document.querySelector('#Descripcion2').value;
        const  Imagen = document.querySelector('#imagen2').value;
        console.log(CategoriaNombre);
        
    
        const datos={
            CategoriaID:idActualizar,
            CategoriaNombre,
            Descripcion,
            Imagen
        }
        console.log(datos);
    
        updateCategoria(datos)
    }  

    }

    }
 


