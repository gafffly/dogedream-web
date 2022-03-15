import classNames from "classnames"
import * as React from "react"

import { ISectionProps } from "."

export interface ISectionImageProps extends ISectionProps {
  shadow?: boolean
  className?: string
}

export default function SectionImage({
  imageSrc,
  shadow = true,
  className = "",
}: ISectionImageProps) {
  const src = imageSrc
  const shadowClass = shadow && "shadow shadow-lg"

  return (
    <div
      className={
        "flex flex-col space-x-4 md:flex-row md:(items-center justify-between)"
      }
    >
      {src && (
        <div
          className={classNames(
            shadowClass,
            `w-full h-full min-h-screen-sm bg-cover bg-opacity-80 bg-no-repeat bg-center rounded-lg  md:round-lg dark:bg-slate-800`,
            className
          )}
          style={{
            backgroundImage: `url(${src})`,
          }}
        ></div>
      )}
    </div>
  )
}
