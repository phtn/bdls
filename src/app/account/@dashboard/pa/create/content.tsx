"use client";

import { TheTip, TooltipTrigger } from "@/app/(ui)/tooltip";
import { Disc3Icon } from "lucide-react";
import { useState } from "react";
import { Title } from "../../(autos)/autos";

export const CreateAccountContent = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="flex items-center space-x-6">
        <TheTip content="Compulsory Third Party Liability">
          <TooltipTrigger>
            <Title className="flex items-center space-x-4">
              <span>Create Account</span>
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2"></div>
      </div>
    </div>
  );
};
