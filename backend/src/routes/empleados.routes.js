import {Router} from "express";
import { methodsHTTP as empleadoController} from "../controllers/empleado.controllers.js";
const router = Router();

//la ruta trae los datos completos de la tabla
router.get("/" , empleadoController.getEmpleados);

//para poder añadir datos a la tabla es necesario traer cada uno de los atributos de la tabla
router.post("/" , empleadoController.addEmpleados);

//la ruta recibe un parametro que es el id de cada uno de los datos ingresados
router.get("/:id",empleadoController.getEmpleadosId);

//la ruta debe recibir como parametro el id de la empleado a eliminar
router.delete("/:id",empleadoController.deleteEmpleados);

//la ruta debe recibir como parametro el id de la catgoria a eliminar como tambien los datos pertenecientes a cada tabla
router.put("/:id",empleadoController.updateEmpleados);

export default router;
