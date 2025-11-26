import { twMerge } from "tailwind-merge";
import clsx from "clsx";

/**
 * A utility function to merge multiple classnames into a single class name.
 * It uses `tailwind-merge` under the hood to handle merging of classnames.
 * @param {...inputs} - Multiple classnames to be merged.
 * @returns {string} - A single class name that is the result of merging the input classnames.
 * @example
 * cn("bg-red-500", "text-lg") // returns "bg-red-500 text-lg"
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
