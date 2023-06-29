import getConnection from "./../db/database.js";

const getCategorias = async(req,res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT CategoriaID,CategoriaNombre, Descripcion, Imagen FROM categorias");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const getCategoriaId = async(req,res) => {
  try {
    console.log(req.params);
    const {id} = req.params;

    const connection = await getConnection();
    const result = await connection.query("SELECT CategoriaID,CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?", id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const addCategorias = async (req , res)=>{
  try {
    console.log(req.body);

    const {categoriaNombre , Descripcion , Imagen} = req.body;
    const category = {
      categoriaNombre ,
      Descripcion ,
      Imagen
    }
    const connection = await getConnection();

    const resultado = await connection.query("INSERT INTO categorias SET ?", category )
    res.json(resultado);

    res.json(resultado)
  } catch (error) {
    req.status(500);
    res.send(error.message);
  }
}

export const methodsHTTP = {
  getCategorias,
  addCategorias,
  getCategoriaId
};

