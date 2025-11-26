
import { cn } from "@/lib/utils";
import Link from "next/link";
import image from "@/public/logo.png";
import Image from "next/image";
const Logo = ({ className = "" }) => {
  return (
    <Link className={cn("w-44 h-16 overflow-hidden flex justify-center items-center", className)} href={"/"}>
      <Image
        src={image}
        alt="logo"
        width={170}
        height={50}
        className="w-full h-auto object-contain"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </Link>
  );
};

export default Logo;
