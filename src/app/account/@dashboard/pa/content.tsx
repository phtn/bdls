"use client";

import { TheTip, TooltipTrigger } from "@/app/(ui)/tooltip";
import { Disc3Icon, PlusIcon, Table } from "lucide-react";
import { Title } from "../(autos)/autos";
import { Card } from "../(components)/card";
import { useState } from "react";
import { XCard } from "../(components)/xcard";
import { useRouter } from "next/navigation";

export const PAContent = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleCreateAccount = () => {
    router.push("pa/create");
  };
  return (
    <div>
      <div className="flex items-center space-x-6">
        <TheTip content="Compulsory Third Party Liability">
          <TooltipTrigger>
            <Title className="flex items-center space-x-4">
              <span>Personal Accident Insurance</span>
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
          <XCard
            title="Create Account"
            description="Create database of employees."
            onClick={handleCreateAccount}
            onClickCrypto={() => console.log("")}
            iconStyle=""
            icon={Table}
            actionLabel="Create Account"
            value={""}
            loading={false}
          />
          <Card
            title="Domestic"
            description="Travel within the Philippines"
            onClick={() => console.log("")}
            onClickCrypto={() => console.log("")}
            iconStyle=""
            icon={PlusIcon}
            actionLabel="Checkout"
            value={""}
            loading={false}
          />
        </div>
      </div>
    </div>
  );
};
