const urlCategorias = "http://localhost:4000/api/categorias"


export const getCategorias= async ()=>{
    try {
        const categorias = await fetch (urlCategorias);
        const datoCategorias = await categorias.json();
        console.log(datoCategorias);
        return datoCategorias;
    } catch (error) {
        console.log(error);
    }
}


export const nuevaCategorias = async(registroCategoria)=>{
    console.log(registroCategoria);
    try {
        await fetch (urlCategorias,{
            method:"POST",
            body:JSON.stringify(registroCategoria),
            headers:{"Content-Type": "application/json"}

        })

        window.location="categorias.html"
    } catch (error) {
        console.log(error);
    }
}


export const deleteCategorias= async idCategorias =>{
    console.log(idCategorias);
 try {
    await fetch (`${urlCategorias}/${idCategorias}`,{
        method:'DELETE'
    })
     window.location="categorias.html" 
 } catch (error) {
    console.log(error);
 }
}


export const updateCategoria= async datos =>{
    console.log(datos);
 try {
    await fetch (`${urlCategorias}/${parseInt(datos.CategoriaID)}`,{
        method:'PUT',
        body:JSON.stringify(datos),
        headers:{"Content-Type": "application/json"}
    })
    .then(response=>response.json())
    .then(ubdateData =>{
        console.log('DATOS Actualizados',ubdateData);
    })

     window.location="categorias.html" 
 } catch (error) {
    console.log(error);
 }
}