import StartIcon from '@/assets/icons/star.svg'
import { twMerge } from 'tailwind-merge'

export default function CardHeader({
  title,
  description,
  className,
}: {
  className?: string
  title: string
  description: string
}) {
  return (
    <div
      className={twMerge('flex flex-col p-6 md:py-8 md:px-10 gap-2', className)}
    >
      <div className="inline-flex items-center gap-2">
        <StartIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="text-sm lg:text-base max-w-xs text-white/60">
        {description}
      </p>
    </div>
  )
}
