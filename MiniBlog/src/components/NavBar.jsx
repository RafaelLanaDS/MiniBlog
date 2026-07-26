import {NavLink} from 'react-router-dom'
import styles from './NavBar.module.css'


const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to='/' className={styles.brand}>
            Mini <span>BLOG</span>
        </NavLink>
        <ul className={styles.links_list}>
            <li><NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink></li>
            <li><NavLink to="/abaut" className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink></li>
        </ul>
    </nav>
  )
}

export default NavBar