import { z } from "zod";

export const AccountType = z.union([
  z.literal("BUSINESS"),
  z.literal("AFFILIATE"),
  z.literal("PERSONAL"),
]);

export const CreateAccountResource = z.object({
  userId: z.string().min(1),
  email: z.string().email(),
  accountType: AccountType,
  displayName: z.string().or(z.null()),
  firstName: z.string().or(z.null()),
  lastName: z.string().or(z.null()),
  completeName: z.string().or(z.null()),
  credentials: z.array(z.string().or(z.null())).or(z.null()),
  isVerified: z.boolean(),
  isComplete: z.boolean(),
  premium: z.boolean(),
  accountManager: z.string(),
  address: z.object({
    lineOne: z.string().or(z.null()),
    lineTwo: z.string().or(z.null()),
    city: z.string().or(z.null()),
    state: z.string().or(z.null()),
    country: z.string().or(z.null()),
  }),
  createdAt: z.number(),
  updatedAt: z.number(),
});

export const CreateAccountResourceInit = z.object({
  userId: z.string().min(1),
  email: z.string().email(),
  accountType: AccountType,
});

export const AccountSetupResource = z.object({
  userId: z.string().min(1),
  email: z.string().email(),
  accountType: AccountType,
  displayName: z.string(),
  phoneNumber: z.string(),
  agentId: z.string(),
});

export type NewUserPayload = z.infer<typeof CreateAccountResource>;
export type UserAccount = z.infer<typeof CreateAccountResourceInit>;
export type AccountSetupResourceSchema = z.infer<typeof AccountSetupResource>;

/**
userId,
      email,
      accountType,
      displayName: null,
      firstName: null,
      lastName: null,
      completeName: null,
      credentials: [],
      isVerified: false,
      isComplete: false,
      premium: false,
      accountManager: "AP-0000",
      address: {
        lineOne: null,
        lineTwo: null,
        city: null,
        state: null,
        country: null,
      },
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
*/
