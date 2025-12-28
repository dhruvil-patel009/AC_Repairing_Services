import { Request, Response } from "express";
import { supabaseAdmin } from "../utils/supabase.js";

const TEMP_OTP = process.env.TEMP_OTP || "123456";

/**
 * REGISTER (NO PASSWORD)
 */
export const register = async (req: Request, res: Response) => {
  try {
    const {
      role,
      firstName,
      middleName,
      lastName,
      phone,
      email,
      experienceYears,
      promoCode
    } = req.body;

    // ✅ Create user WITHOUT password
    const { data, error } = await supabaseAdmin.auth.admin.createUser({
      phone,
      email,
      email_confirm: true
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const userId = data.user.id;

    await supabaseAdmin.from("profiles").insert({
      id: userId,
      role,
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      phone,
      email
    });

    if (role === "technician") {
      await supabaseAdmin.from("technician_details").insert({
        id: userId,
        experience_years: experienceYears,
        promo_code: promoCode
      });
    }

    res.status(201).json({ message: "Registered successfully" });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

/**
 * STEP 1 — LOGIN WITH PHONE (SEND OTP)
 */
export const loginWithPhone = async (req: Request, res: Response) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ error: "Phone required" });
  }

  const { data } = await supabaseAdmin
    .from("profiles")
    .select("id, role")
    .eq("phone", phone)
    .single();

  if (!data) {
    return res.status(404).json({ error: "User not registered" });
  }

  res.json({
    message: "OTP sent (DEV MODE)",
    otp: TEMP_OTP  // DEV ONLY
  });
};


/**
 * STEP 2 — VERIFY OTP & LOGIN (NO PASSWORD)
 */
export const verifyPhoneOtp = async (req: Request, res: Response) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) {
    return res.status(400).json({ error: "Phone & OTP required" });
  }

  if (otp !== TEMP_OTP) {
    return res.status(401).json({ error: "Invalid OTP" });
  }

  // Fetch full user profile
  const { data: profile, error } = await supabaseAdmin
    .from("profiles")
    .select(`
      id,
      role,
      first_name,
      middle_name,
      last_name,
      phone,
      email,
      created_at
    `)
    .eq("phone", phone)
    .single();

  if (error || !profile) {
    return res.status(404).json({ error: "User not found" });
  }

  // 🔥 MOCK SESSION DATA (DEV MODE)
  const issuedAt = Math.floor(Date.now() / 1000); // now (seconds)
  const expiresIn = 60 * 60; // 1 hour
  const expiresAt = issuedAt + expiresIn;

  res.json({
    message: "Login successful (DEV MODE)",
    session: {
      accessToken: `dev-token-${profile.id}`,
      refreshToken: `dev-refresh-${profile.id}`,
      tokenType: "bearer",
      issuedAt,
      expiresIn,
      expiresAt
    },
    user: {
      id: profile.id,
      role: profile.role,
      firstName: profile.first_name,
      middleName: profile.middle_name,
      lastName: profile.last_name,
      phone: profile.phone,
      email: profile.email,
      createdAt: profile.created_at
    }
  });
};



