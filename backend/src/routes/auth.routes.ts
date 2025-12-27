import { Router } from "express";
import {
  register,
  loginWithPhone,
  verifyPhoneOtp
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login-phone", loginWithPhone);
router.post("/verify-otp", verifyPhoneOtp);

export default router;
