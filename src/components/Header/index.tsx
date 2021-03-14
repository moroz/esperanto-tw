import * as React from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"
import HeaderLink from "./HeaderLink"
import LocaleLinks from "./LocaleLinks"

const Header = () => (
  <header className="header">
    <div>
      <Link to="/" className="header__site_name">
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
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
