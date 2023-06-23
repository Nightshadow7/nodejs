import {Router} from "express";
import { methodsHTTP as empleadoController} from "../controllers/empleado.controllers.js";
const router = Router();

router.get("/", empleadoController.getEmpleados);

export default router;
