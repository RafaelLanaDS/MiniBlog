import styles from './EditePost.module.css'

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'
import { useFetchDocument } from "../../hooks/useFetchDocument";

const editePost = () => {

  const {id} = useParams()
  const { document: post } = useFetchDocument("posts" , id)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState("")
  const [formError, setFormError] = useState("")

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setImage(post.image);
      setBody(post.body);

      const textTags = post.tags.join(", ");

      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue()
  const navigate = useNavigate()

  const { insertDocument, response } = useInsertDocument("posts")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError("")

    // validade da imagem
    try {
      new URL(image)
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.")
      return
    }

    if (formError) return;

    // criar o array de tags
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim().toLowerCase())
      .filter(Boolean)

    // checar todos os valores 
    if (!title || !image || !body || tagsArray.length === 0) {
      setFormError("Por favor, preencha todos os campos.")
      return
    }

    if (!user) {
      setFormError("Você precisa estar autenticado para criar um post.")
      return
    }

    await insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName || "Usuário"
    })

    navigate("/")
  }

  return (
    <div className={styles.editePost}>
      {post && (
        <>
          <h2>Editando Post: {post.title  }</h2>
          <p>Altere os dados do post como desejar</p>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Título:</span>
              <input type="text" name="title" id="" required placeholder='pense num bom titulo!'  onChange={(e) => setTitle(e.target.value)} value={title}/>
            </label>
            <label>
              <span>Url da Imagem:</span>
              <input type="text" name="image" id="" required placeholder='Insira uma image'  onChange={(e) => setImage(e.target.value)} value={image}/>
            </label>
            <p className={styles.previewTitle}>Preview da imagem atual</p>
            <img className={styles.imagePreview} src={post.image} alt={post.title} />
            <label>
              <span>Conteúdo:</span>
              <textarea name="body" id="" required placeholder='Insira o conteudo do Post' onChange={(e) => setBody(e.target.value)} value={body}></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input type="text" name="Tags" id="" required placeholder='Insira suas Tags separadas por vírgula' onChange={(e) => setTags(e.target.value)} value={tags} />
            </label>
            {formError && <p className="error">{formError}</p>}
            {!response.loading && <button className="btn">Cadastrar</button>}
            {response.loading && <button className="btn" disabled>agurde...</button>}
            {response.error && <p className="error">{response.error}</p>}
            {formError.error && <p className="error">{formError}</p>}
          </form>
        </>
      )}
    </div>
  )
}

export default editePost
