import { DarkTouch, Touch } from "@/app/(ui)/touch";
import { cn } from "@/utils/cn";
import { type LucideIcon, Disc3Icon, ArrowRightIcon } from "lucide-react";
import { type ReactElement } from "react";
import tw from "tailwind-styled-components";

type CardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconStyle?: string;
  actionIcon?: LucideIcon;
  actionIconStyle?: string;
  actionLabel: string;
  onClick: () => void;
  onClickCrypto?: () => void;
  trigger?: ReactElement;
  value?: number | string | undefined;
  loading?: boolean;
};
export const XCard = (props: CardProps) => {
  const {
    title,
    iconStyle,
    actionIconStyle,
    actionLabel,
    description,
    onClick,
    value,
    loading,
  } = props;
  return (
    <Cape>
      <CardContainer>
        <div className="bg-[url('/svg/dots.svg')] bg-cover p-6">
          <div className="flex items-center justify-between">
            <props.icon size={24} className={cn("text-prime", iconStyle)} />
            {/* <p className="rounded-lg bg-ash/30 px-2 py-1 font-sans text-2xl font-thin tracking-tight text-prime">
            ₱ <span className=" font-semibold">{value}</span>
          </p> */}
          </div>
          <div className="text-md mt-6 font-sans font-semibold tracking-tighter text-coal">
            {title}
          </div>
          <div className="mb-14 text-[14px] text-sm font-light text-gray-600">
            {description}
          </div>
          <div className="flex h-[40px] items-center space-x-4">
            <DarkTouch
              iconClass={actionIconStyle}
              size={"md"}
              className=""
              onClick={onClick}
              tail={Disc3Icon}
              tailClass={loading ? "animate-spin" : "size-0 hidden"}
            >
              {actionLabel}
            </DarkTouch>
          </div>
        </div>
      </CardContainer>
    </Cape>
  );
};

const Cape = tw.div`
    bg-void/80 overflow-scroll
    border-[0.33px] border-ash/60
    shadow-md shadow-stone-400
    rounded-lg
    `;
const CardContainer = tw.div`
  overflow-clip xl:pr-[2px]
  bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))]
  from-indigo-300/50 via-slate-300 to-orange-50 h-full w-full
  `;
