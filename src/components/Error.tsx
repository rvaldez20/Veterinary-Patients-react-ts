import { ReactNode } from "react"

type ErrorProps = {
  children: ReactNode
}

export function Error({children}: ErrorProps) {
  return (
    <p className="my-3 text-red-600 font-bold text-sm ml-2">{children}</p>
  )
}
