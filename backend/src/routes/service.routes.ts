import { Router } from "express";
import {
  createServiceController,
  getAllServicesController,
  getServicesByCategoryController,
} from "../controllers/service.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/role.middleware.js";

const router = Router();

// ✅ Admin only
router.post(
  "/",
  protect,
  authorize("admin"),
  createServiceController
);

// ✅ Public
router.get("/", getAllServicesController);
router.get("/:category", getServicesByCategoryController);

export default router;
