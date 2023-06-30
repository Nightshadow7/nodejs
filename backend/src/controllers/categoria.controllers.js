import getConnection from "./../db/database.js";

const getCategorias = async(req,res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT id_categoria,nombre_categoria,descripcion_categoria,img_categoria FROM categorias");
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

    const {
      nombre_categoria,
      descripcion_categoria,
      img_categoria
    } = req.body;
    const category = {
      nombre_categoria ,
      descripcion_categoria ,
      img_categoria
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

const getCategoriasId = async(req,res) => {
  try {
    console.log(req.params);
    const {id} = req.params;

    const connection = await getConnection();
    const result = await connection.query("SELECT id_categoria,nombre_categoria,descripcion_categoria,img_categoria FROM categorias WHERE id_categoria = ?", id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const deleteCategorias = async(req,res) => {
  try {
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM categorias WHERE id_categoria = ?", id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const updateCategorias = async (req , res)=>{
  try {
    const {id} = req.params;
    const {
      nombre_categoria ,
      descripcion_categoria ,
      img_categoria
    } = req.body;
    const category = {
      nombre_categoria ,
      descripcion_categoria ,
      img_categoria
    }
    const connection = await getConnection();

    const resultado = await connection.query("UPDATE categorias SET ? WHERE id_categoria = ?", [category,id]);
    res.json(resultado);

    res.json(resultado)
  } catch (error) {
    req.status(500);
    res.send(error.message);
  }
};


export const methodsHTTP = {
  getCategorias,
  addCategorias,
  getCategoriasId,
  deleteCategorias,
  updateCategorias
};