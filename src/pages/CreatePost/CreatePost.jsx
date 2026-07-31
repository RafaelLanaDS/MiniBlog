import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefaul()
  }

  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input type="text" name="title" id="" required placeholder='pense num bom titulo!'  onChange={(e) => setTitle(e.target.value)} value={title}/>
        </label>
        <label>
          <span>Url da Imagem:</span>
          <input type="text" name="image" id="" required placeholder='Insira uma image'  onChange={(e) => setImage(e.target.value)} value={image}/>
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea name="body" id="" required placeholder='Insira o conteudo do Post' onChange={(e) => setBody(e.target.value)} value={body}></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input type="text" name="Tags" id="" required placeholder='Insira suas Tags sepados por vírgula'  onChange={(e) => setTags(e.target.value)} value={tags}/>
        </label>
        <button className='btn'>Cadastrar</button>
        {/*{!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn" disabled>agurde...</button>}
        {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  )
}

export default CreatePost
