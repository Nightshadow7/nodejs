import {Router} from "express";
import { methodsHTTP as productosController} from "../controllers/producto.controllers.js";
const router = Router();

router.get("/" , productosController.getProductos)

export default router;


// @route   GET api/users/:id