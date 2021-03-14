import * as React from "react"
import { Link } from "gatsby"

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <header className="header">
    <div>
      <Link to="/" className="header__site_name">
        {siteTitle}
      </Link>
    </div>
  </header>
)

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
