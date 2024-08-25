import { ElementType } from 'react'

export default function TechIcon({ as }: { as: ElementType }) {
  const Component = as

  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-graident)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-graident">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  )
}
