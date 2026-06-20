import { cn } from "@/utils/cn"

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: IButtonProps) {
    return (
        <button
            className={cn(
                `bg-gray-900 px-4 py-1 rounded-sm outline-none flex flex-row items-center justify-center border-2 border-transparent group
                hover:bg-white hover:border-2 hover:border-gray-900 transition-all duration-200`,
                className
            )}
            {...props}
        >
            {typeof children === 'string'
                ? <p className="font-semibold text-sm text-white group-hover:text-black ">{children}</p>
                : children
            }
        </button>
    )
}