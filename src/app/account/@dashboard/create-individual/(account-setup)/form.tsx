import { FormControl, FormField, FormItem } from "@@ui/form";
import { InputField } from "@@ui/input";
import { DarkTouch } from "@@ui/touch";
import { type Control, type ControllerRenderProps } from "react-hook-form";
import {
  accountSetupFields,
  type AccountSetupField,
  type AccountSetupFormProps,
  type AccountSetupSchema,
} from "./schema";
import { ArrowUpRightIcon, Disc3Icon } from "lucide-react";
import { cn } from "@/utils/cn";

export const CreateForm = ({
  form,
  loading,
  onSubmit,
}: AccountSetupFormProps) => {
  const { handleSubmit, control, formState } = form;
  const { isValid } = formState;

  const Submit = () => {
    return (
      <DarkTouch
        size="lg"
        type="submit"
        tail={loading ? Disc3Icon : ArrowUpRightIcon}
        tailClass={loading ? "animate-spin" : "animate-none stroke-width-[1px]"}
        disabled={!isValid || loading}
        className={cn(
          `h-[60px] w-full text-[16px]`,
          loading ? ` text-blue-200` : isValid ? `text-zap` : ``,
        )}
      >
        Submit
      </DarkTouch>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Fields control={control} fields={accountSetupFields} />
      <Submit />
    </form>
  );
};

type RenderProps = {
  field: ControllerRenderProps<AccountSetupSchema>;
  item: AccountSetupField;
};

const render = ({ field, item }: RenderProps) => (
  <FormItem className="my-5">
    <FormControl>
      <InputField
        icon={item.icon}
        alt={item.alt}
        placeholder={item.placeholder}
        type={item.type}
        {...field}
      />
    </FormControl>
  </FormItem>
);

type FieldProps = {
  fields: AccountSetupField[];
  control: Control<AccountSetupSchema>;
};

const Fields = ({ control, fields }: FieldProps) => {
  return fields.map((item) => (
    <FormField
      key={item.name}
      control={control}
      name={item.name}
      render={({ field }) => render({ field, item })}
    />
  ));
};
