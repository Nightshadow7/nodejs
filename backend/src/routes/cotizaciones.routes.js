import {Router} from "express";
import { methodsHTTP as cotizacionController} from "../controllers/cotizacion.controllers.js";
const router = Router();

//la ruta trae los datos completos de la tabla
router.get("/" , cotizacionController.getCotizaciones);

//para poder añadir datos a la tabla es necesario traer cada uno de los atributos de la tabla
router.post("/" , cotizacionController.addCotizaciones);

//la ruta recibe un parametro que es el id de cada uno de los datos ingresados
router.get("/:id",cotizacionController.getCotizacionesId);

//la ruta debe recibir como parametro el id de la cotizacion a eliminar
router.delete("/:id",cotizacionController.deleteCotizaciones);

//la ruta debe recibir como parametro el id de la catgoria a eliminar como tambien los datos pertenecientes a cada tabla
router.put("/:id",cotizacionController.updateCotizaciones);




export default router;


// @route   GET api/users/:id