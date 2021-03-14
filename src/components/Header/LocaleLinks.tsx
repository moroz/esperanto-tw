import { Link } from "gatsby"
import React from "react"
import useLocale from "../../hooks/useLocale"

const className = "header__navlink header__locale_link"

const LocaleLinks = () => {
  const { locale, basepath } = useLocale()
  return (
    <>
      {locale !== "eo" ? (
        <Link to={basepath || "/"} className={className}>
          EO
        </Link>
      ) : null}
      {locale !== "en-US" ? (
        <Link to={`/en${basepath}`} className={className}>
          EN
        </Link>
      ) : null}
      {locale !== "zh-TW" ? (
        <Link to={`/zh${basepath}`} className={className}>
          中文
        </Link>
      ) : null}
    </>
  )
}

export default LocaleLinks
