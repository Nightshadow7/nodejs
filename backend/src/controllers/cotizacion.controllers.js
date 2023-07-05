import getConnection from "./../db/database.js";

const getCotizaciones = async(req,res) => {
  try {
    const connection = await getConnection();
id_cotizacion,fk_id_empleado,fk_id_constructora,fecha_cotizacion,hora_cotizacion,dia_alquiler,duracion_alquiler
const result = await connection.query("SELECT  FROM cotizaciones");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const addCotizaciones = async (req , res)=>{
  try {
    console.log(req.body);

    const {
      fk_id_empleado,
      fk_id_constructora,
      fecha_cotizacion,
      hora_cotizacion,
      dia_alquiler,
      duracion_alquiler
    } = req.body;
    const category = {
      fk_id_empleado,
      fk_id_constructora,
      fecha_cotizacion,
      hora_cotizacion,
      dia_alquiler,
      duracion_alquiler
    }
    const connection = await getConnection();

    const resultado = await connection.query("INSERT INTO cotizaciones SET ?", category )
    res.json(resultado);

    res.json(resultado)
  } catch (error) {
    req.status(500);
    res.send(error.message);
  }
}

const getCotizacionesId = async(req,res) => {
  try {
    console.log(req.params);
    const {id} = req.params;

    const connection = await getConnection();
    const result = await connection.query("SELECT id_categoria,nombre_categoria,descripcion_categoria,img_categoria FROM cotizaciones WHERE id_cotizacion = ?", id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const deleteCotizaciones = async(req,res) => {
  try {
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM cotizaciones WHERE id_cotizacion = ?", id);
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
      fk_id_empleado,
      fk_id_constructora,
      fecha_cotizacion,
      hora_cotizacion,
      dia_alquiler,
      duracion_alquiler
    } = req.body;
    const category = {
      fk_id_empleado,
      fk_id_constructora,
      fecha_cotizacion,
      hora_cotizacion,
      dia_alquiler,
      duracion_alquiler
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
