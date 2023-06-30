import {Router} from "express";
import { methodsHTTP as constructoraController} from "../controllers/constructora.controllers.js";
const router = Router();

//la ruta trae los datos completos de la tabla
router.get("/" , constructoraController.getConstructoras);
//para poder añadir datos a la tabla es necesario traer cada uno de los atributos de la tabla
router.post("/" , constructoraController.addConstructoras);
//la ruta recibe un parametro que es el id de cada uno de los datos ingresados
router.get("/:id",constructoraController.getConstructorasId);

//la ruta debe recibir como parametro el id de la constructora a eliminar
router.delete("/:id",constructoraController.deleteConstructoras);

//la ruta debe recibir como parametro el id de la catgoria a eliminar como tambien los datos pertenecientes a cada tabla
router.put("/:id",constructoraController.updateConstructoras);




export default router;

// @route   GET api/users/:id