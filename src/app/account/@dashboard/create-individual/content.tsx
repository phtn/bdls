"use client";

import { TheTip, TooltipTrigger } from "@/app/(ui)/tooltip";
import { Disc3Icon, UserIcon } from "lucide-react";
import { Title } from "../(autos)/autos";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormCard } from "../(components)/form-card";
import { CreateAccount } from "./(account-setup)/create-account";

export const CreateIndividualAccountContent = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center space-x-6">
        <TheTip content="">
          <TooltipTrigger>
            <Title className="flex items-center space-x-4">
              <span>Create Indivual Account</span>
              {loading ? (
                <Disc3Icon
                  className="size-4 animate-spin text-fast"
                  strokeWidth={1}
                />
              ) : null}
            </Title>
          </TooltipTrigger>
        </TheTip>
      </div>

      <div className="my-[16px]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <FormCard
            title="Account Info"
            description=""
            iconStyle=""
            icon={UserIcon}
            actionLabel="Submit"
            value={""}
            loading={false}
          >
            <CreateAccount accountType="PERSONAL" />
          </FormCard>
        </div>
      </div>
    </div>
  );
};
