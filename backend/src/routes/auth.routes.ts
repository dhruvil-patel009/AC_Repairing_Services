import { Router } from "express";
import {
  register,
  loginWithPhone,
  verifyPhoneOtp
} from "../controllers/auth.controller.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = Router();

router.post("/register", upload.single("profileImage"), register);
router.post("/login-phone", loginWithPhone);
router.post("/verify-otp", verifyPhoneOtp);

export default router;
