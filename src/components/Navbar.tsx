import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src="/bolsi-icon.png" alt="Bolsi" className={styles.logoIcon} />
        </Link>
        <div className={styles.links}>
          <a href="#features" className={styles.link}>Funciones</a>
          <a href="#download" className={styles.link}>Descargar</a>
          {pathname !== '/privacy' && (
            <Link to="/privacy" className={styles.link}>Privacidad</Link>
          )}
          <a
            href="#download"
            className={styles.cta}
          >
            Descargar gratis
          </a>
        </div>
      </div>
    </nav>
  )
}
