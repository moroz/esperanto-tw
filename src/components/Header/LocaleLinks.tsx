import { Link } from "gatsby"
import React from "react"
import useLocale from "../../hooks/useLocale"

const LocaleLinks = () => {
  const { locale, basepath } = useLocale()
  return (
    <>
      {locale !== "eo" ? <Link to={basepath}>EO</Link> : null}
      {locale !== "en-US" ? <Link to={`/en${basepath}`}>EN</Link> : null}
      {locale !== "zh-TW" ? <Link to={`/zh${basepath}`}>中文</Link> : null}
    </>
  )
}

export default LocaleLinks
