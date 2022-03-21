import { useRouter } from "next/router"
import * as React from "react"
import ScrollTo from "react-scroll-into-view"
import i18n from "../../i18n/index"
import ColorButton from "../ColorButton"
import LocaleSwitcher, { Language } from "../LocaleSwitcher"

export interface IHeaderProps {}

export const TextLogo = () => {
  return (
    <div className="h-min align-middle text-current text-semibold text-3xl antialiased font-bold">
      <span className="text-white">DogeDream</span>
      <span className="text-fuchsia-500">DAO</span>
    </div>
  )
}

export const NavMenu = () => {
  const router = useRouter()
  const { locale: activeLocale } = router
  const lang = i18n[activeLocale as Language]

  return (
    <nav className="text-white text-xl">
      <div className="flex flex-row items-center space-x-6">
        {lang.nav.map((item, index) => (
          <ScrollTo key={index} selector={`#${item.anchor}`}>
            <span
              className={"cursor-pointer hover:(text-fuchsia-500 underline)"}
              title={item.desc}
            >
              {item.title}
            </span>
          </ScrollTo>
        ))}

        <LocaleSwitcher></LocaleSwitcher>

        <ScrollTo key={"buy"} selector={`#buy`}>
          <ColorButton>{lang.buy.text}</ColorButton>
        </ScrollTo>
      </div>
    </nav>
  )
}

export default function Header(props: IHeaderProps) {
  return (
    <header className="container mx-auto h-min">
      <div className="flex flex-row items-center h-70px mt-6 mb-6 md:justify-between">
        <TextLogo></TextLogo>
        <NavMenu></NavMenu>
      </div>
    </header>
  )
}
