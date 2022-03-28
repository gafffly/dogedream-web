import { useRouter } from "next/router"
import * as React from "react"
import ScrollTo from "react-scroll-into-view"
import { Drawer, Button } from "antd"
import { MenuOutlined } from "@ant-design/icons"
import i18n from "../../i18n/index"
import ColorButton from "../ColorButton"
import LocaleSwitcher, { Language } from "../LocaleSwitcher"
import useMedia from "use-media"

export interface IHeaderProps {}

export const TextLogo = () => {
  return (
    <div className="h-min align-middle text-current text-semibold text-3xl antialiased font-bold">
      <span className="text-white">DogeDream</span>
      <span className="text-fuchsia-500">DAO</span>
    </div>
  )
}

export const NavMenu = ({ onClick = () => {} }: { onClick?: () => void }) => {
  const router = useRouter()
  const { locale: activeLocale } = router
  const lang = i18n[activeLocale as Language]

  return (
    <nav
      role={`menu`}
      className="text-white text-xl flex flex-col lg:(flex-row items-center space-x-6)"
      onClick={onClick}
    >
      {lang.nav.map((item) => {
        const isAbsoluteURL = /^http(s)?:\/\//.test(item.anchor)
        const domNode = (
          <div
            role={`menuitem`}
            key={item.anchor}
            className={
              "cursor-pointer hover:(text-fuchsia-500 underline) <lg:(text-2xl text-slate-500 py-4 px-6)>"
            }
            title={item.desc}
          >
            {item.title}
          </div>
        )

        return isAbsoluteURL ? (
          domNode
        ) : (
          <ScrollTo key={item.anchor} selector={`#${item.anchor}`}>
            {domNode}
          </ScrollTo>
        )
      })}

      <LocaleSwitcher
        className={
          "cursor-pointer hover:(text-fuchsia-500 underline) <lg:(text-2xl text-slate-500 py-8)"
        }
      ></LocaleSwitcher>

      <ScrollTo key={"buy"} selector={`#buy`}>
        <ColorButton className="<lg:(text-2xl py-4 w-full)">
          {lang.buy.text}
        </ColorButton>
      </ScrollTo>
    </nav>
  )
}

const ResponsiveHeader = () => {
  const isMobileDevice = useMedia({ maxWidth: 1024 })

  const [visible, setVisible] = React.useState<boolean>(false)
  const showDrawer = () => {
    setVisible(true)
  }
  const onClose = () => {
    setVisible(false)
  }

  return isMobileDevice ? (
    <>
      <Button
        type="text"
        icon={<MenuOutlined className="text-white !text-2xl" />}
        onClick={showDrawer}
      ></Button>

      <Drawer
        placement={"left"}
        width={`70%`}
        onClose={onClose}
        visible={visible}
        closable={false}
      >
        <NavMenu onClick={onClose}></NavMenu>
      </Drawer>
    </>
  ) : (
    <NavMenu></NavMenu>
  )
}

export default function Header(props: IHeaderProps) {
  return (
    <header className="container mx-auto h-min pl-8 pr-8 mt-6">
      <div className="flex flex-row items-center justify-between h-70px">
        <TextLogo></TextLogo>

        <ResponsiveHeader></ResponsiveHeader>
      </div>
    </header>
  )
}
