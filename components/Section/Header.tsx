import * as React from "react"
import { toString } from "lodash"

export interface ISectionHeaderProps {
  title?: React.ReactNode
  desc?: React.ReactNode
}

export default function SectionHeader({ title, desc }: ISectionHeaderProps) {
  return (
    <div className="mb-10">
      {title && (
        <h2
          className="text-gray-100 text-center text-6xl font-medium mt-4 mb-4"
          title={toString(title)}
        >
          {title}
        </h2>
      )}

      {desc && (
        <p className="text-gray-200 leading-relaxed text-center text-2xl font-medium">
          {desc}
        </p>
      )}
    </div>
  )
}
