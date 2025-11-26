"use client"

import { cn } from "@/lib/utils"

const ErrorText = ({ error, className }) => {
    return (
        <p className={cn('text-base text-red-500 font-medium', className)}>{error}</p>
    )
}

export default ErrorText