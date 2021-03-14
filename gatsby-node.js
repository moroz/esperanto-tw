const glob = require("glob")
const path = require("path")

const PREFIXED_LOCALES = ["en", "zh"]
const PREFIXES = ["", "/en", "/zh"]

exports.createPages = async ({ actions, graphql, reporter }) => {
  glob.sync("src/pages/*.*").forEach(file => {
    let { name } = path.parse(file)
    if (name === "index") name = ""
    const template = path.resolve(file)
    PREFIXED_LOCALES.forEach(locale => {
      const url = `/${locale}/${name}`
      actions.createPage({
        path: url,
        component: template,
      })
    })
  })

  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          uri
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }

  const { allWpPost } = result.data

  // Define the template to use
  const template = require.resolve(`./src/templates/post.tsx`)

  if (allWpPost.nodes.length) {
    allWpPost.nodes.map(post => {
      PREFIXES.forEach(prefix => {
        actions.createPage({
          path: `${prefix}/blog${post.uri}`,
          component: template,
          context: post,
        })
      })
    })
  }
}
