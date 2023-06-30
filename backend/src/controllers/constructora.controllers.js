import getConnection from "./../db/database.js";

const getConstructoras = async(req,res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT id_constructora,nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto FROM constructoras");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addConstructoras = async (req , res)=>{
  try {
    console.log(req.body);

    const {
      nombre_constructora ,
      nit_constructora ,
      nombre_representante,
      email_contacto ,
      telefono_contacto
    } = req.body;
    const category = {
      nombre_constructora ,
      nit_constructora ,
      nombre_representante ,
      email_contacto ,
      telefono_contacto
    }
    const connection = await getConnection();

    const resultado = await connection.query("INSERT INTO constructoras SET ?", category )
    res.json(resultado);

    res.json(resultado)
  } catch (error) {
    req.status(500);
    res.send(error.message);
  }
};

const getConstructorasId = async(req,res) => {
  try {
    console.log(req.params);
    const {id} = req.params;

    const connection = await getConnection();
    const result = await connection.query("SELECT id_constructora,nombre_constructora,nit_constructora, nombre_representante,email_contacto,telefono_contacto FROM constructoras WHERE id_constructora = ?", id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const deleteConstructoras = async(req,res) => {
  try {
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM constructoras WHERE id_constructora = ?", id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
}

const updateConstructoras = async (req , res)=>{
  try {
    const {id} = req.params;
    const {
      nombre_constructora ,
      nit_constructora ,
      nombre_representante ,
      email_contacto ,
      telefono_contacto
    } = req.body;
    const category = {
      nombre_constructora ,
      nit_constructora ,
      nombre_representante ,
      email_contacto ,
      telefono_contacto
    }
    const connection = await getConnection();

    const resultado = await connection.query("UPDATE constructoras SET ? WHERE id_constructora = ?", [category,id])
    res.json(resultado);

    res.json(resultado)
  } catch (error) {
    req.status(500);
    res.send(error.message);
  }
}


export const methodsHTTP = {
  getConstructoras,
  addConstructoras,
  getConstructorasId,
  deleteConstructoras,
  updateConstructoras
};



