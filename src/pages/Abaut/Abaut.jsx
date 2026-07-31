import React from 'react'
import styles from './Abaut.module.css'
import {Link} from  'react-router-dom'

const Abaut = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com React no Front-End e FireBase no Back-And.</p>
      <Link to="/post/create" className='btn'>Criar Post</Link>
    </div>
  )
}

export default Abaut
