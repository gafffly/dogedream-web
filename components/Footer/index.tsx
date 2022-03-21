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
      <div className="grid grid-cols-1 gap-4 grid-flow-row auto-rows-max justify-around md:grid-cols-2 md:gap-8">
        <div className="flex items-center justify-center text-gray-200 space-x-6 text-center md:(text-left justify-start)">
          <SocialList></SocialList>
        </div>

        <div className="leading-relaxed font-medium text-2xl text-center md:(text-right)">
          <TextLogo></TextLogo>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 grid-flow-row auto-rows-max justify-around md:grid-cols-2 md:gap-8">
        <div className="text-gray-400 text-center md:text-left">
          {lang.header.desc}
        </div>

        <div className="text-gray-400 text-center md:text-right">
          All Right Reserved © Dogedream DAO
        </div>
      </div>
    </Section>
  )
}
