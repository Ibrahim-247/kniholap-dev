"use client";
import Loader from "@/components/common/Loader";
import { cn } from "@/lib/utils";
import Link from "next/link";

const CommonBtn = ({
  children,
  type = "submit",
  link = false,
  className,
  path = "",
  isLoading = false,
  onclick,
  disabled = false,
}) => {
  const commonStyle =
    'w-full cursor-pointer bg-primary rounded-xl p-2.5 min-h-11 sm:min-h-14 flex justify-center items-center text-sm sm:text-base text-white capitalize disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <>
      {link ? (
        <Link
          href={path}
          aria-hidden="true"
          className={cn(commonStyle, className)}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          disabled={disabled}
          onClick={onclick}
          aria-hidden="true"
          className={cn(commonStyle, className)}
        >
          {isLoading ? <Loader className="border-white" /> : children}
        </button>
      )}
    </>
  );
};

export default CommonBtn;
