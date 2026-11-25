import { Router } from "express";

import ProductController from "../controllers/ProductController.js";
import auth from "../middleware/auth.js";
const router = Router();

router.get("/" , ProductController.GetAll)
router.post("/create", auth.authUser, ProductController.Create);
router.put("/update",  auth.authUser , ProductController.update);
router.delete("/delete/:id",  auth.authUser , ProductController.deleteProduct)

export default router;





