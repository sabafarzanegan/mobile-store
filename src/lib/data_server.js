import { supabase } from "@/components/supabse";

export async function getUser(email) {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  return data;
}

export async function createUser(newuser) {
  const { data, error } = await supabase.from("users").insert([newuser]);

  if (error) {
    console.log(error);
    throw new Error("user could not create");
  }

  return data;
}

export async function getProducts() {
  const { data, error } = await supabase.from("phone").select("*");
  await new Promise((res) => setTimeout(res, 2000));

  if (error) {
    console.log(error);
    throw new Error("product cuold not get");
  }

  return data;
}

export async function getProduct(id) {
  const { data, error } = await supabase.from("phone").select("*").eq("id", id);
  if (error) {
    throw new Error("could not get this product");
  }
  return data;
}
