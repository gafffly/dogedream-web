import { Dropdown, Menu } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"
import * as React from "react"

type ValueOf<T> = T[keyof T]
type LanguageMapValue = ValueOf<typeof LanguageMap>
export declare type Language = keyof typeof LanguageMap

const LanguageMenu = ({
  languageList,
}: {
  languageList: LanguageMapValue[]
}) => {
  return (
    <Menu>
      {languageList.map((lang) => (
        <Menu.Item key={lang.key}>
          <Link href={"/"} locale={lang.val}>
            <a>{lang.val}</a>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

const LanguageMap = {
  en: {
    key: "en",
    val: "English",
  },
  cn: {
    key: "cn",
    val: "中文",
  },
}

export interface ILocaleSwitcherProps {}

export default function LocaleSwitcher(props: ILocaleSwitcherProps) {
  const router = useRouter()
  const { locales, locale } = router
  const activeLocale = locale as Language
  const otherLocales = (locales?.filter((locale) => locale !== activeLocale) ||
    []) as Language[]

  return (
    <>
      {otherLocales.map((locale) => {
        const { pathname, query, asPath } = router
        const active = locale === activeLocale
        const activeClassName = active ? "active" : ""

        return (
          <Link
            key={LanguageMap[locale].key}
            href={{ pathname, query }}
            as={asPath}
            locale={locale}
          >
            <a className={activeClassName}>{LanguageMap[locale].val}</a>
          </Link>
        )
      })}
    </>
  )
}
