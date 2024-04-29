"use client";

import { type AccountType } from "@/server/resource/account";
import { onError, onPromise, onSuccess } from "@/utils/toast";
import { Form } from "@@ui/form";
import { auth } from "@@libs/db";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { type z } from "zod";
import { CreateForm } from "./form";
import {
  setupDefaults,
  accountSetupSchema,
  type AccountSetupSchema,
} from "./schema";
import { setupNewAccount } from "@/trpc/account/account-setup";
import { useContext } from "react";
import { AuthContext } from "@/app/(context)/context";

export type UserAccountType = z.infer<typeof AccountType>;

export type AccountSetupProps = {
  accountType: UserAccountType;
};

export const CreateAccount = ({ accountType }: AccountSetupProps) => {
  const user = useContext(AuthContext)?.user;
  const form = useForm<AccountSetupSchema>({
    resolver: zodResolver(accountSetupSchema),
    defaultValues: setupDefaults,
  });

  const [
    createUserWithEmailAndPassword,
    userCreate,
    createUserLoading,
    createUserError,
  ] = useCreateUserWithEmailAndPassword(auth);

  const Err = (err: Error) => onError(err.name, err.message);

  const handleCreateUser = ({
    name,
    email,
    phoneNumber,
  }: AccountSetupSchema) => {
    const createAccountPromise = new Promise((resolve) => {
      return resolve(
        createUserWithEmailAndPassword(email, email).then((creds) => {
          if (creds) {
            setupNewAccount({
              userId: creds.user.uid,
              email: email,
              accountType,
              displayName: name,
              phoneNumber,
              agentId: `${user?.uid}`,
            })
              .then(() => {
                onSuccess("Account created.", userCreate?.user?.email ?? "");
              })
              .catch(Err);
          }
        }),
      );
    });
    onPromise(
      createAccountPromise,
      "Create account...",
      "Create Account",
      "Account Created!",
      createUserError,
    );
  };

  const onSubmit = (values: AccountSetupSchema) => {
    const { name, email, phoneNumber } = values;
    handleCreateUser({ name, email, phoneNumber });
  };

  return (
    <Form {...form}>
      <CreateForm form={form} loading={createUserLoading} onSubmit={onSubmit} />
    </Form>
  );
};
