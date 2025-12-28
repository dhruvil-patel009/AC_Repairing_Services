import { supabaseAdmin } from "../utils/supabase.js";

export const createService = async (payload: any) => {
  const { data, error } = await supabaseAdmin
    .from("services")
    .insert({
      category: payload.category,
      sub_category: payload.sub_category,
      name: payload.name,
      description: payload.description,
      base_price: payload.base_price,
      image_url: payload.image_url, // ✅ added
      is_active: true,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
};

export const getAllServices = async () => {
  const { data, error } = await supabaseAdmin
    .from("services")
    .select(
      "id, category, sub_category, name, description, base_price, image_url"
    )
    .eq("is_active", true)
    .order("category");

  if (error) throw error;
  return data;
};

export const getServicesByCategory = async (category: string) => {
  const { data, error } = await supabaseAdmin
    .from("services")
    .select(
      "id, category, sub_category, name, description, base_price, image_url"
    )
    .eq("category", category)
    .eq("is_active", true);

  if (error) throw error;
  return data;
};
