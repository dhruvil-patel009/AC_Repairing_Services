import { Request, Response, NextFunction } from "express";
import { supabaseAuth, supabaseAdmin } from "../utils/supabase.js";

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email?: string;
    role?: "user" | "technician" | "admin";
  };
}

export const protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    const token = authHeader.split(" ")[1];

    /* =====================================================
       🔧 DEV MODE TOKEN SUPPORT
       ===================================================== */
    if (token.startsWith("dev-token-")) {
      const userId = token.replace("dev-token-", "");

      // 🔹 Fetch role from DB (recommended)
      const { data: profile, error } = await supabaseAdmin
        .from("profiles")
        .select("role, email")
        .eq("id", userId)
        .single();

      if (error || !profile) {
        return res.status(401).json({ error: "Invalid dev token user" });
      }

      req.user = {
        id: userId,
        email: profile.email,
        role: profile.role,
      };

      return next();
    }

    /* =====================================================
       🔐 REAL SUPABASE JWT SUPPORT
       ===================================================== */
    const { data, error } = await supabaseAuth.auth.getUser(token);

    if (error || !data.user) {
      return res.status(401).json({ error: "Invalid or expired token" });
    }

    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    req.user = {
      id: data.user.id,
      email: data.user.email,
      role: profile?.role,
    };

    next();
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(401).json({ error: "Unauthorized" });
  }
};
