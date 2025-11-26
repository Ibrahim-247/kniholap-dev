
import { OptionContext } from "@/context"
import { useContext } from "react"

/**
 * useOptions hook
 * This hook returns the context of the OptionProvider
 * The context includes the category list, category list error, and category list loading
 * @returns {Object} context
 * @throws {Error} if useOptions is used outside of OptionProvider
 */
export function useOptions() {
    const context = useContext(OptionContext)
    if (context === undefined) {
        throw new Error('useOptions must be used within a OptionProvider')
    }
    return context
}