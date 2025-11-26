import { cn } from '@/lib/utils'

const SectionTitle = ({ className, text = '' }) => {
    return (
        <p className={cn("lg:text-4xl text-xl sm:text-2xl md:text-3xl font-secondary font-semibold capitalize", className)}>{text}</p>
    )
}

export default SectionTitle