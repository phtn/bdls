"use server";

import { type UserAccount } from "@resource/account";
import { tRPC } from "@/trpc/rsc";

export const createNewUser = async (values: UserAccount) => {
  return await tRPC.createUser.query(values);
};
