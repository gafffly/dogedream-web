import { useRouter } from "next/router"
import * as React from "react"
import i18n from "../../i18n"
import { TextLogo } from "../Header"
import { SocialList } from "../Hero"
import { Language } from "../LocaleSwitcher"
import Section from "../Section"

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  const router = useRouter()
  const { locale: activeLocale } = router
  const lang = i18n[activeLocale as Language]

  return (
    <Section className="space-y-2">
      <div className="grid grid-cols-1 gap-3 grid-flow-row auto-rows-max md:(grid-cols-2 gap-8)">
        <div className="flex flex-row :hover(text-primary) text-gray-200 items-center space-x-6">
          <SocialList></SocialList>
        </div>

        <div className="leading-relaxed text-2xl text-right font-medium">
          <TextLogo></TextLogo>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center text-lg">
        <div className="text-gray-400">All Right Reserved © Dogedream DAO</div>

        <div className="text-gray-400">{lang.header.desc}</div>
      </div>
    </Section>
  )
}
