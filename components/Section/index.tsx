import classNames from "classnames"
import * as React from "react"
import SectionHeader from "./Header"
import SectionImage from "./Image"

export interface ISectionProps {
  className?: string
  id?: string
  children?: React.ReactNode
  title?: React.ReactNode
  desc?: React.ReactNode
  imageSrc?: string
}

export default function Section({
  id,
  title,
  children,
  desc,
  imageSrc,
  className = "space-y-8",
  ...rest
}: ISectionProps) {
  return (
    <section
      id={id}
      className={classNames(
        "container mx-auto pt-10 pb-10 md:(pt-15 pb-8) lg:(pt-20 pb-12)",
        className
      )}
    >
      {(title || desc) && (
        <SectionHeader title={title} desc={desc}></SectionHeader>
      )}

      {children}

      {imageSrc && <SectionImage imageSrc={imageSrc} {...rest}></SectionImage>}
    </section>
  )
}
