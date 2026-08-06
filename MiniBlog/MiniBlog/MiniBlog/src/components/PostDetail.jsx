import styles from './PostDetail.module.css'
import { Link } from 'react-router-dom'

const PostDetail = ({ post }) => {
  return (
    <div className={styles.postCard}>
      <img className={styles.postImage} src={post.image} alt={post.title} />
      <div className={styles.postContent}>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <p className={styles.postAuthor}>{post.createdBy}</p>
        <div className={styles.postTags}>
          {post.tags?.map((tag) => (
            <p className={styles.postTag} key={tag}><span>#</span>{tag}</p>
          ))}
        </div>
        <Link to={`/post/${post.id}`} className={`${styles.postLink} btn btn-outline`}>Ler</Link>
      </div>
    </div>
  )
}

export default PostDetail
