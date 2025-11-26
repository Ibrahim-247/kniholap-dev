import { UserContext } from "@/context"
import { useContext } from "react"

export function useUser() {
    const context = useContext(UserContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}