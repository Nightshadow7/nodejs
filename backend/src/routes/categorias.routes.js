import {Router} from "express";
import { methodsHTTP as categoriaController} from "../controllers/categoria.controllers.js";
const router = Router();

//la ruta trae los datos completos de la tabla
router.get("/" , categoriaController.getCategorias);
//para poder añadir datos a la tabla es necesario traer cada uno de los atributos de la tabla
router.post("/" , categoriaController.addCategorias);
//la ruta recibe un parametro que es el id de cada uno de los datos ingresados
router.get("/:id",categoriaController.getCategoriasId);

//la ruta debe recibir como parametro el id de la categoria a eliminar
router.delete("/:id",categoriaController.deleteCategorias);

//la ruta debe recibir como parametro el id de la catgoria a eliminar como tambien los datos pertenecientes a cada tabla
router.put("/:id",categoriaController.updateCategorias);

export default router;


// @route   GET api/users/:id