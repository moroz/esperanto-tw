import { Link } from "gatsby"
import React from "react"
import { FormattedMessage } from "react-intl"

interface Props {
  children: string
  messageId: string
  href: string
}

const HeaderLink = ({ children, messageId, href }: Props) => {
  return (
    <Link to={href}>
      <FormattedMessage id={messageId} defaultMessage={children} />
    </Link>
  )
}

export default HeaderLink
