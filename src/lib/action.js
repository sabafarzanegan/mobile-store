"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut, auth } from "./auth";

import { supabase } from "@/components/supabse";

export async function signInaction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutaction() {
  await signOut({ redirectTo: "/" });
}

export async function updateFormAction(formData) {
  const session = await auth();
  if (!session) throw new Error("ابتدا وارد شوید.");

  const address = formData.get("address");
  const city = formData.get("city");

  const updateData = { address, city };

  const { data, error } = await supabase
    .from("users")
    .update(updateData)
    .eq("id", session.user.userId);

  if (error) {
    throw new Error("اطلاعات به روز نشد.");
  }

  revalidatePath("/account/profile");
}
