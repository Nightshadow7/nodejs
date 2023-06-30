import {Router} from "express";
import { methodsHTTP as productosController} from "../controllers/producto.controllers.js";
const router = Router();

//la ruta trae los datos completos de la tabla
router.get("/" , productosController.getProductos);
//para poder añadir datos a la tabla es necesario traer cada uno de los atributos de la tabla
router.post("/" , productosController.addProductos);
//la ruta recibe un parametro que es el id de cada uno de los datos ingresados
router.get("/:id",productosController.getProductosId);

//la ruta debe recibir como parametro el id de la productos a eliminar
router.delete("/:id",productosController.deleteProductos);

//la ruta debe recibir como parametro el id de la catgoria a eliminar como tambien los datos pertenecientes a cada tabla
router.put("/:id",productosController.updateProductos);




export default router;


// @route   GET api/users/:id