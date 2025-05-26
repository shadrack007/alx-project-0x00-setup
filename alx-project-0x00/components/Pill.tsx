import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center bg-[#F9F9F9] px-3 w-auto h-[27px] rounded-full">
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default Pill;
