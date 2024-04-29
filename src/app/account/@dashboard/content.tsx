"use client";
import {
  Building2,
  Link2Icon,
  PlusIcon,
  UserPlusIcon,
  Users2Icon,
} from "lucide-react";
import { Header } from "./(components)/header";
import { Card } from "./(components)/card";
import { ConnectGroup } from "./(components)/connect-group";
import { AutosPage } from "./(autos)/autos";
import { useContext } from "react";
import { AuthContext } from "@/app/(context)/context";
import { XCard } from "./(components)/xcard";
import { useRouter } from "next/navigation";

const AffiliateContent = () => {
  const router = useRouter();

  const handleCreateIndividual = () => {
    router.push("account/create-individual/");
  };

  return (
    <div className="w-full ">
      <Header title="Today">{/* <ConnectGroup /> */}</Header>
      <div className="my-[16px]">
        <div className="grid grid-cols-1 gap-6 border-0 border-sky-500 md:grid-cols-2">
          <XCard
            title="Create Individual Account"
            description="Create account for individual."
            onClick={handleCreateIndividual}
            icon={UserPlusIcon}
            iconStyle=""
            actionIcon={PlusIcon}
            actionLabel="Create Individual"
          />
          <XCard
            title="Create Business Account"
            description="Create account for business."
            onClick={() => console.log("create")}
            icon={Building2}
            actionIcon={PlusIcon}
            actionLabel="Create Business"
          />
        </div>
      </div>
    </div>
  );
};

const PersonalContent = () => {
  return (
    <div className="w-full">
      <AutosPage />
      <div className="my-[16px]">
        {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <Card
            title="Add Autos"
            description="Get paid by sharing a link with your clients."
            onClick={() => console.log("create")}
            icon={CarIcon}
            iconStyle=""
            trigger={<AddAuto />}
            actionLabel="Add"
          />

          name, suffix, position, dob, age, benifiary, rel to ben. cat, company, department, project code
        </div> */}
      </div>
    </div>
  );
};

const BusinessContent = () => {
  return (
    <div className="w-full ">
      <Header title="Today">
        <ConnectGroup />
      </Header>
      <div className="my-[16px]">
        <div className="grid grid-cols-1 gap-6 border-0 border-sky-500 md:grid-cols-2">
          <Card
            title="Create Payment Link"
            description="Get paid by sharing a link with your clients."
            onClick={() => console.log("create")}
            onClickCrypto={() => console.log("")}
            icon={Link2Icon}
            iconStyle="-rotate-45"
            actionIcon={PlusIcon}
            actionLabel="Create"
          />
          <Card
            title="Create Client Account"
            description="Add a new client to your list."
            onClick={() => console.log("create")}
            onClickCrypto={() => console.log("")}
            icon={UserPlusIcon}
            actionIcon={PlusIcon}
            actionLabel="Create"
          />
        </div>
      </div>
    </div>
  );
};

export const DashboardContent = () => {
  const profile = useContext(AuthContext)?.profile;
  switch (profile?.accountType) {
    case "AFFILIATE":
      return <AffiliateContent />;
    case "BUSINESS":
      return <BusinessContent />;
    default:
      return <PersonalContent />;
  }
};
