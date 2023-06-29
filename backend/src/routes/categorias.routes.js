import {Router} from "express";
import { methodsHTTP as categoriaController} from "../controllers/categoria.controllers.js";
const router = Router();

router.get("/" , categoriaController.getCategorias);
router.post("/" , categoriaController.addCategorias);
router.get("/:id",categoriaController.getCategoriaId);

export default router;


// @route   GET api/users/:id