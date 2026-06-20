import { cn } from "@/utils/cn";

export function Column({ className }: { className?: string }) {
    return (
        <div className={cn("h-full bg-white w-58 min-w-58 items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.3)]", className)}>
            <div className="border-b p-2 border-gray-500">
                <p className="font-semibold text-gray-600 text-sm text-center">Título da coluna aqui</p>
            </div>
        </div>
    )
}