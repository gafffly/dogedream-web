import * as React from "react"
import styles from "./styles.module.css"

export interface IRoadmapItemProps {
  title?: React.ReactNode
  desc?: React.ReactNode
}

export const RoadmapItem: React.FC<IRoadmapItemProps> = ({ title, desc }) => (
  <div className={styles.roadmapItem}>
    <div className="text-1xl text-gray-300 mb-2">{title}</div>
    <p className="text-2xl text-gray-200 leading-normal ">{desc}</p>
  </div>
)

export interface IRoadmapProps {
  items?: IRoadmapItemProps[]
  children?: React.ReactNode
}

Roadmap.Item = RoadmapItem

export default function Roadmap({ items, children }: IRoadmapProps) {
  return (
    <div className={styles.roadmap}>
      {children ||
        (Array.isArray(items) &&
          items.map((item, index) => (
            <RoadmapItem key={index} {...item}></RoadmapItem>
          )))}
    </div>
  )
}
