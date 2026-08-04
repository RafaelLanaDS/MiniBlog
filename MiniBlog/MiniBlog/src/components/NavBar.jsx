import {NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'


const NavBar = () => {
  const { user } = useAuthValue()
  const {logout} = useAuthentication()

  return (
    <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
            Mini <span>BLOG</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li><NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink></li>
            <li><NavLink to="/abaut" className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink></li>
            {!user && (
              <>
                <li><NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Logar</NavLink></li>
                <li><NavLink to="/register" className={({isActive}) => (isActive ? styles.active : "")}>Cadastrar</NavLink></li>
              </>
            )}

            {user && (
              <>
                <li><NavLink to="/post/create" className={({isActive}) => (isActive ? styles.active : "")}>Novo Post</NavLink></li>
                <li><NavLink to="/Dashboard" className={({isActive}) => (isActive ? styles.active : "")}>Dashboard</NavLink></li>
              </>
            )}
            {user && (
              <li>
                <button onClick={logout}>Sair</button>
              </li>
            )}
        </ul>
    </nav>
  )
}

export default NavBar