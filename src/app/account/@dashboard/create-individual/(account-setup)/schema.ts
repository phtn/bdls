import { type HTMLInputTypeAttribute } from "react";
import { type UseFormReturn } from "react-hook-form";
import { type IconName } from "@@ui/input";
import { z } from "zod";
import { AtSignIcon, PhoneIcon, UserIcon, type LucideIcon } from "lucide-react";

export const accountSetupSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string(),
});

export type AccountSetupSchema = z.infer<typeof accountSetupSchema>;

export const setupDefaults: AccountSetupSchema = {
  name: "",
  email: "",
  phoneNumber: "",
};

export type FieldName = "email" | "name" | "phoneNumber";

type FormType = UseFormReturn<AccountSetupSchema>;

export type AccountSetupFormProps = {
  form: FormType;
  loading: boolean;
  onSubmit: (values: AccountSetupSchema) => void;
};

export interface AccountSetupField {
  name: FieldName;
  label: string;
  placeholder: string;
  inputType: "input" | "select";
  type: HTMLInputTypeAttribute;
  alt: IconName;
  icon: LucideIcon;
}

export const accountSetupFields: AccountSetupField[] = [
  {
    name: "name",
    label: "Name",
    placeholder: "Name",
    inputType: "input",
    type: "name",
    alt: "name",
    icon: UserIcon,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    inputType: "input",
    type: "email",
    alt: "email",
    icon: AtSignIcon,
  },
  {
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "Phone Number",
    inputType: "input",
    type: "phoneNumber",
    alt: "mobile",
    icon: PhoneIcon,
  },
];
