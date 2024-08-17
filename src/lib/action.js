"use server";

import { signIn, signOut } from "./auth";

export async function signInaction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function signOutaction() {
  await signOut({ redirectTo: "/" });
}
