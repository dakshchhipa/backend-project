import { Router } from "express";
import { registerUser } from "../../src/controllers/usercontroller.js";
const router = Router();

router.route("/register").post(registerUser);
export default router;
