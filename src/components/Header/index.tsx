import * as React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"
import HeaderLink from "./HeaderLink"
import LocaleLinks from "./LocaleLinks"
import Hamburger from "./Hamburger"

const SCROLL_THRESHOLD = 40

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false)
  const [opaque, setOpaque] = React.useState(false)

  const handleScroll = React.useCallback(() => {
    setOpaque(window.pageYOffset >= SCROLL_THRESHOLD)
  }, [setOpaque])

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`header ${hamburgerOpen ? "header--menu-open" : ""} ${
        opaque ? "header--opaque" : ""
      }`}
    >
      <div>
        <Link to="/" className="header__branding">
          <FormattedMessage
            id="siteTitle"
            defaultMessage="Esperanto en Tajvano"
          />
        </Link>
      </div>
      <div className="header__menu">
        <HeaderLink href="/" messageId="nav.homepage">
          Cxefpagxo
        </HeaderLink>
        <HeaderLink href="/artikoloj" messageId="nav.articles">
          Artikoloj
        </HeaderLink>
        <HeaderLink href="/agadoj" messageId="nav.events">
          Agadoj
        </HeaderLink>
        <HeaderLink href="/lernomaterialoj" messageId="nav.learning">
          Lernomaterialoj
        </HeaderLink>
        <LocaleLinks />
      </div>
      <Hamburger
        open={hamburgerOpen}
        onToggle={() => setHamburgerOpen(t => !t)}
      />
    </header>
  )
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
