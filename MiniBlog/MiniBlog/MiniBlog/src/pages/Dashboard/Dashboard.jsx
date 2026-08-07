import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'

//hooks
import {useAuthValue} from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {

  const {user} = useAuthValue()
  const uid = user.uid

  //user post
  const posts = []

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie seus post</p>
      {posts && posts.length ===  0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to='/post/create' className='btn'>Criar primeiro post</Link>
        </div>
      ) : (
        <div>
          <p>Tem posts !!</p>
        </div>
      ) }
    </div>
  )
}

export default Dashboard
