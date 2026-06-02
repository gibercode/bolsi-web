import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img src="/bolsi-icon.png" alt="" className={styles.logoIcon} />
          <span>Bolsi</span>
        </Link>
        <div className={styles.links}>
          {isHome ? (
            <>
              <a href="#features" className={styles.link}>Funciones</a>
              <Link to="/privacy" className={styles.link}>Privacidad</Link>
              <a href="https://play.google.com/store/apps/details?id=com.gibercode.bolsi" target="_blank" rel="noreferrer" className={styles.cta}>Descargar gratis</a>
            </>
          ) : (
            <>
              <Link to="/" className={styles.link}>Inicio</Link>
              <a href="https://play.google.com/store/apps/details?id=com.gibercode.bolsi" target="_blank" rel="noreferrer" className={styles.cta}>Descargar gratis</a>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
