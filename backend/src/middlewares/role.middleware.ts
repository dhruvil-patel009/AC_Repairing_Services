import { Response, NextFunction } from "express";
import { AuthRequest } from "./auth.middleware.js";

export const authorize =
  (...allowedRoles: Array<"user" | "technician" | "admin">) =>
  (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !req.user.role) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden" });
    }

    next();
  };
