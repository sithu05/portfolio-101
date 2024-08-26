import { ComponentPropsWithRef, PropsWithChildren } from 'react'

import bg from '@/assets/images/grain.jpg'
import { twMerge } from 'tailwind-merge'

export default function Card({
  className,
  children,
  ...props
}: ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:content-[''] after:z-10 after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20  after:pointer-events-none",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      />
      {children}
    </div>
  )
}
