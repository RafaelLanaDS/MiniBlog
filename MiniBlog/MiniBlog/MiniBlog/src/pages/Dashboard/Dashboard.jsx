import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'

//hooks
import {useAuthValue} from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {

  const { user } = useAuthValue()
  const uid = user?.uid

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid)

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie seus post</p>
      {loading && <p>Carregando posts...</p>}

      {!loading && posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to='/post/create' className='btn'>Criar primeiro post</Link>
        </div>
      ) : (
        posts && (
          <div>
            {posts.map((post) => (
              <h3 key={post.id}>{post.title}</h3>
            ))}
          </div>
        )
      )}
    </div>
  )
}

export default Dashboard
