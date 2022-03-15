import { shuffle } from "lodash"
import Image from "next/image"
import { useRouter } from "next/router"
import * as React from "react"

import i18n from "../../i18n"
import { Language } from "../LocaleSwitcher"
import Section from "../Section"

export const NFTImagesList = [
  "/images/nfts/1.jpeg",
  "/images/nfts/2.jpeg",
  "/images/nfts/3.jpeg",
]

export const SocialList = () => {
  return (
    <>
      <a
        href="https://twitter.com/doge_dream_dao"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
        >
          <path d="M24 4.60078C23.1 5.00078 22.2 5.30078 21.2 5.40078C22.2 4.80078 23 3.80078 23.4 2.70078C22.4 3.30078 21.4 3.70078 20.3 3.90078C19.4 2.90078 18.1 2.30078 16.7 2.30078C14 2.30078 11.8 4.50078 11.8 7.20078C11.8 7.60078 11.8 8.00078 11.9 8.30078C7.7 8.10078 4.1 6.10078 1.7 3.10078C1.2 3.90078 1 4.70078 1 5.60078C1 7.30078 1.9 8.80078 3.2 9.70078C2.4 9.70078 1.6 9.50078 1 9.10078C1 9.10078 1 9.10078 1 9.20078C1 11.6008 2.7 13.6008 4.9 14.0008C4.5 14.1008 4.1 14.2008 3.6 14.2008C3.3 14.2008 3 14.2008 2.7 14.1008C3.3 16.1008 5.1 17.5008 7.3 17.5008C5.6 18.8008 3.5 19.6008 1.2 19.6008C0.8 19.6008 0.4 19.6008 0 19.5008C2.2 20.9008 4.8 21.7008 7.5 21.7008C16.6 21.7008 21.5 14.2008 21.5 7.70078C21.5 7.50078 21.5 7.30078 21.5 7.10078C22.5 6.40078 23.3 5.50078 24 4.60078Z"></path>
        </svg>
      </a>
      <a
        href="https://t.me/doge_dream_dao"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
        >
          <path d="M23.953 2.52809C23.9336 2.43947 23.8911 2.35756 23.8298 2.29065C23.7685 2.22375 23.6906 2.17422 23.604 2.14709C23.2887 2.08464 22.9624 2.10777 22.659 2.21409C22.659 2.21409 1.63003 9.77309 0.429029 10.6101C0.171029 10.7901 0.0840289 10.8951 0.0410289 11.0181C-0.166971 11.6181 0.480029 11.8761 0.480029 11.8761L5.90003 13.6421C5.99167 13.6585 6.08591 13.653 6.17503 13.6261C7.40703 12.8471 18.575 5.79209 19.224 5.55509C19.324 5.52509 19.401 5.55509 19.381 5.63009C19.123 6.53509 9.47203 15.1081 9.41903 15.1601C9.39321 15.1812 9.3731 15.2085 9.36052 15.2394C9.34795 15.2703 9.34331 15.3039 9.34703 15.3371L8.84103 20.6291C8.84103 20.6291 8.62903 22.2761 10.276 20.6291C11.444 19.4601 12.565 18.4921 13.125 18.0211C14.989 19.3081 16.994 20.7311 17.859 21.4761C18.0045 21.6169 18.1769 21.727 18.3659 21.7997C18.5549 21.8723 18.7567 21.9062 18.959 21.8991C19.2082 21.8687 19.4423 21.7632 19.63 21.5965C19.8178 21.4298 19.9503 21.2099 20.01 20.9661C20.01 20.9661 23.84 5.54309 23.968 3.47709C23.981 3.27709 23.998 3.14509 24 3.00609C24.0063 2.84536 23.9904 2.68453 23.953 2.52809Z"></path>
        </svg>
      </a>
      <a
        href="https://discord.gg/doge_dream_dao"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          fill="currentColor"
        >
          <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"></path>
        </svg>
      </a>
    </>
  )
}

const CardNft = ({
  src,
  width = 180,
  height = 180,
  ...rest
}: {
  src: string
  width?: number
  height?: number
}) => {
  return (
    <div className="inline-flex w-max bg-slate-100 rounded-md shadow-md shadow md:round-lg dark:bg-slate-800">
      <Image
        className="rounded-md"
        objectFit="cover"
        alt="nft"
        width={width}
        height={height}
        src={src}
        {...rest}
      ></Image>
    </div>
  )
}

export const GridList = ({ imageList = [] }: { imageList: string[] }) => {
  return (
    <>
      {imageList.map((image) => (
        <CardNft key={image} src={image} width={240} height={240}></CardNft>
      ))}
    </>
  )
}

export const FlexList = ({ imageList = [] }: { imageList: string[] }) => {
  return (
    <div className="flex flex-row sm:(space-y-1) md:(flex-col space-y-2) lg:(flex-col space-y-4)">
      {imageList.map((image) => (
        <CardNft key={image} src={image}></CardNft>
      ))}
    </div>
  )
}

export interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  const router = useRouter()
  const { locale: activeLocale } = router
  const lang = i18n[activeLocale as Language]

  return (
    <Section>
      <div className="flex flex-col md:flex-row md:(items-center justify-between)">
        <div className="flex-shrink">
          <h1 className="text-slate-100 text-8xl text-semibold">
            <span className="text-gray-100">DAO</span> &{" "}
            <span className="text-slate-100">NFT</span>
          </h1>
          <h2 className="text-slate-200 text-6xl font-medium mt-8">
            {lang.header.content[0].desc}
          </h2>
          <h2 className="text-slate-200 text-6xl font-medium mt-2">
            {lang.header.content[1].desc}
          </h2>
          <div className="flex flex-row text-gray-200 space-x-4 mt-8 scale-150">
            <SocialList></SocialList>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center  sm:(space-x-1 space-y-1) md:(space-x-2 space-y-2) lg:(space-x-4 space-y-4)">
          <FlexList imageList={shuffle(NFTImagesList).slice(1)}></FlexList>
          <FlexList imageList={NFTImagesList}></FlexList>
          <FlexList imageList={shuffle(NFTImagesList).slice(1)}></FlexList>
        </div>
      </div>
    </Section>
  )
}
