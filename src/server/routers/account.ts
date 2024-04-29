import { createUserAccount } from "../firebase/account";
import { CreateUser } from "@procedures/account";
import { router } from "../trpc";

export const accountRouter = router({
  createUser: CreateUser.query(async ({ input }) => await createUserAccount(input)),
});
