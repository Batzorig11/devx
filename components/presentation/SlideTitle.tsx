import { ReactNode } from "react"

type SlideTitleProps = {
  children: ReactNode,
}

export default function SlideTitle({children} : SlideTitleProps) {
  return <h1 className="text-6xl">{children}</h1>
}
