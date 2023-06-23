import {Router} from "express";
import { methodsHTTP as cotizacionController} from "../controllers/cotizacion.controllers.js";
const router = Router();

router.get("/" , cotizacionController.getCotizaciones)

export default router;


// @route   GET api/users/:id