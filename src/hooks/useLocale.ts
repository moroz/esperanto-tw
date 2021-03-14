import { useLocation } from "@reach/router"

const pattern = /^\/([a-z]{2})\/?/

export default () => {
  const { pathname } = useLocation()
  const rawMatch = pathname.match(pattern)
  const match = rawMatch?.[1]
  const basepath = rawMatch ? pathname.replace(rawMatch[0], "") : pathname
  if (match === "zh") {
    return {
      prefix: "/zh",
      locale: "zh-TW",
      htmlLang: "zh-Hant",
      basepath,
    }
  } else if (match === "en") {
    return {
      prefix: "/en",
      locale: "en-US",
      htmlLang: "en-US",
      basepath,
    }
  } else {
    return {
      prefix: "",
      locale: "eo",
      htmlLang: "eo",
      basepath,
    }
  }
}
