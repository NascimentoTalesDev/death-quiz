"use server";

import { AuthController } from "@/core/controllers/AuthController";

export async function getSession() {
  const authController = new AuthController();
  const cookie = await authController.getTokenSession();
  return cookie;
}

export async function signOutDeath() {
  const authController = new AuthController();
  await authController.removeSession();

  return;
}
