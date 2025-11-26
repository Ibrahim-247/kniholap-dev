import { cn } from "@/lib/utils";

const CommonDashboardTitle = ({ className, text = "" }) => {
    return (
        <h3 className={cn("lg:text-[32px] text-2xl font-semibold text-black", className)}>
            {text}
        </h3>
    );
};
export default CommonDashboardTitle;