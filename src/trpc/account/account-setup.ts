"use server";

import { type AccountSetupResourceSchema } from "@resource/account";
import { tRPC } from "@/trpc/rsc";

export const setupNewAccount = async (values: AccountSetupResourceSchema) => {
  return await tRPC.createUser.query(values);
};
