import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <img
              src="/bolsi-icon.png"
              alt="Bolsi"
              className={styles.logoIcon}
            />
            <span>Bolsi</span>
          </div>
          <p className={styles.tagline}>
            Tu calculadora inteligente para el control de cambio y compras.
          </p>
        </div>
        <div className={styles.links}>
          <Link to="/privacy" className={styles.link}>
            Política de Privacidad
          </Link>
          <a href="#features" className={styles.link}>
            Funciones
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.gibercode.bolsi" target="_blank" rel="noreferrer" className={styles.link}>
            Descargar
          </a>
        </div>
      </div>
    </footer>
  );
}
