import classNames from "classnames"
import * as React from "react"
import styles from "./styles.module.css"

export interface IColorButtonProps {
  className?: string
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function ColorButton({
  className,
  children,
  onClick = () => {},
}: IColorButtonProps) {
  return (
    <button
      className={classNames(
        `static flex flex-row justify-center items-center appearance-none
         w-max h-max text-white shadow rounded px-6 py-2 transition ease-in-out`,
        `hover:shadow-sm active:(bg-fuchsia-700 animate-bounce animate-pulse) focus:(animate-bounce outline-none ring ring-fuchsia-300)`,
        styles.button,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
