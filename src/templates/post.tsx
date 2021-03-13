import React from "react"
import { graphql } from "gatsby"
import { convertXNotation } from "../helpers/esperantoHelpers"

interface Props {
  data: {
    wpPost: {
      title: string
      content: string
      id: string
    }
  }
}

const PostTemplate = ({ data: { wpPost } }: Props) => {
  const { id, title, content } = wpPost
  return (
    <article className={`post-${id}`}>
      <h1>{convertXNotation(title)}</h1>
      <div dangerouslySetInnerHTML={{ __html: convertXNotation(content) }} />
    </article>
  )
}

export const query = graphql`
  query($id: String) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
    }
  }
`
export default PostTemplate
