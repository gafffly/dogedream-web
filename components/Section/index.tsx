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
        "container mx-auto pl-8 pr-8 pt-8 pb-8 md:(pt-12 pb-12) lg:(pt-16 pb-16) xl:(pt-24 pb-24)",
        className
      )}
    >
      {(title || desc) && (
        <SectionHeader title={title} desc={desc}></SectionHeader>
      )}

      {imageSrc && <SectionImage imageSrc={imageSrc} {...rest}></SectionImage>}

      {children}
    </section>
  )
}
