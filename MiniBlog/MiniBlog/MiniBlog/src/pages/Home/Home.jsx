import styles from './Home.module.css'

import {useNavigate, Link} from 'react-router-dom'
import {useState } from 'react'
import {useFetchDocuments} from "../../hooks/useFetchDocuments"
import PostDetail from '../../components/PostDetail'


const Home = () => {
  const [query, setQuery] = useState("")
  const {documents: post, loading} = useFetchDocuments("posts")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.home}>
      <h1>veja os nossos posts mais recentes</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder='Ou busque tags...' onChange={(e) => setQuery(e.target.value)}/>
        <button className='btn btn-dark'>Pesquisar</button>
      </form>

      <div>
        {loading && <p>Carregando...</p>}
        {post && post.map((post) => (
          <PostDetail post={post} key={post.id}/>
        ))}
        {post && post.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link  to="/post/create" className='btn'>Criar primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
