// import React from 'react'
// import { graphql, Link } from 'gatsby'

// import Content from '../components/Content'
// import Hero from '../components/Hero'
// import SEO from '../components/SEO'

// class Page extends React.Component {
//   render() {
//     const page = this.props.data.markdownRemark

//     return (
//         <SEO
//           title={page.frontmatter.title}
//           description={page.excerpt}
//           path={page.frontmatter.slug}
//           cover={page.frontmatter.cover && page.frontmatter.cover.publicURL}
//         />

//         <Hero
//           heroImg={page.frontmatter.cover && page.frontmatter.cover.publicURL}
//           title={page.frontmatter.title}
//         />

//         <article>
//             <Content content={page.html} date={page.frontmatter.date} />
//         </article>
//     )
//   }
// }

// export default Page

// export const pageQuery = graphql`
//   query PageBySlug($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       id
//       excerpt
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         disqus
//         cover {
//           publicURL
//         }
//       }
//     }
//   }
// `
