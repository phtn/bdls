import { CreateAccountResourceInit } from "@resource/account";
import { procedure } from "../trpc";

export const CreateUser = procedure.input(CreateAccountResourceInit);
