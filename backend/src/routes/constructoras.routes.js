import {Router} from "express";
import { methodsHTTP as constructoraController} from "../controllers/constructora.controllers.js";
const router = Router();

router.get("/" , constructoraController.getConstructoras);

export default router;


// @route   GET api/users/:id