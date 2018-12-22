import React from 'react'
import styled from 'styled-components'
import Content from './Content'

const ArticleWrapper = styled.article`
  padding: 0 30px 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const ArticleFooter = styled.footer`
  position: relative;
  margin: 6rem 0 0;
  padding: 3rem 0 0;
  border-top: 1px solid #ebf2f6;
`

class Article extends Component {
  render() {
    const { post } = this.props

    return (
      <ArticleWrapper>
        <Content
          content={post.html}
          date={post.frontmatter.date}
          tags={post.frontmatter.tags}
        />
        <ArticleFooter>
            
        </ArticleFooter>
      </ArticleWrapper>
    )
  }
}

export default Article
