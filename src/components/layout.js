/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import messages from "../translations"
import { IntlProvider } from "react-intl"
import useLocale from "../hooks/useLocale"

import Header from "./Header"
import "../styles/app.sass"

const Layout = ({ children }) => {
  const { htmlLang, locale } = useLocale()

  return (
    <IntlProvider
      locale={locale}
      messages={messages[locale]}
      defaultLocale="eo"
    >
      <div className="layout" lang={htmlLang}>
        <Header />
        <main>{children}</main>
        <footer className="footer">
          <p>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </p>
        </footer>
      </div>
    </IntlProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
