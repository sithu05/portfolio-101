import { PropsWithChildren } from 'react'

export default function HeroObit({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="flex justify-start items-start"
        style={{
          transform: `rotate(${rotation}deg)`,
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div
          className="inline-flex"
          style={{
            transform: `rotate(${rotation * -1}deg)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
