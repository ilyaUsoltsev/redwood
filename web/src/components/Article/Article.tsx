import { Link, routes } from '@redwoodjs/router'
import { Post } from 'types/graphql'

interface ArticleProps {
  article: Post
}

const Article = ({article}: ArticleProps) => {
  return (
    <div>
          <Link to={routes.article({ id: article.id })}>
          <h1>{article.title} - {article.id}</h1>
          </Link>
          <p>{article.body}</p>
          <pre>{article.createdAt}</pre>
        </div>
  )
}

export default Article
