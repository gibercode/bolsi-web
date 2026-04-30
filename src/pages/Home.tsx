import {
  TrendingUp,
  ShoppingCart,
  ArrowLeftRight,
  ClipboardList,
  WifiOff,
  Share2,
} from 'lucide-react'
import { FaGooglePlay } from 'react-icons/fa'
import styles from './Home.module.css'

const features = [
  {
    Icon: TrendingUp,
    color: '#0062FF',
    bg: '#EEF4FF',
    title: 'Tasas en tiempo real',
    description: 'Consulta el dólar paralelo, USDT y más divisas actualizadas al momento.',
  },
  {
    Icon: ShoppingCart,
    color: '#10B981',
    bg: '#F0FDF4',
    title: 'Listas de compras',
    description: 'Crea listas con precios en múltiples monedas y calcula el total automáticamente.',
  },
  {
    Icon: ArrowLeftRight,
    color: '#8B5CF6',
    bg: '#F5F3FF',
    title: 'Conversión instantánea',
    description: 'Convierte entre USD, EUR, USDT y bolívares con un solo toque.',
  },
  {
    Icon: ClipboardList,
    color: '#F59E0B',
    bg: '#FFFBEB',
    title: 'Tu historial de compras',
    description: 'Revisa todas las listas y operaciones que has guardado, cuando quieras.',
  },
  {
    Icon: WifiOff,
    color: '#EF4444',
    bg: '#FEF2F2',
    title: 'Funciona sin internet',
    description: 'Accede a las últimas tasas guardadas incluso cuando no tienes conexión.',
  },
  {
    Icon: Share2,
    color: '#06B6D4',
    bg: '#ECFEFF',
    title: 'Comparte la tasa del día',
    description: 'Envía las tasas de referencia a tus contactos con un solo toque.',
  },
]

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Disponible para Android</div>
          <h1 className={styles.heroTitle}>
            Tu billetera inteligente para el{' '}
            <span className={styles.highlight}>control de cambio</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Bolsi te ayuda a manejar tus compras, convertir divisas y seguir el
            tipo de cambio en Venezuela — todo en una sola app, sin complicaciones.
          </p>
          <div className={styles.heroActions} id="download">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className={styles.storeBtn}
            >
              <FaGooglePlay size={20} />
              Descargar en Google Play
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.phoneFrame}>
            <img
              src="/app-screenshot.png"
              alt="Bolsi app — pantalla principal"
              className={styles.appScreenshot}
            />
          </div>
          <div className={styles.phoneShadow} />
        </div>
      </section>

      {/* Features */}
      <section className={styles.features} id="features">
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionBadge}>Funcionalidades</span>
            <h2 className={styles.sectionTitle}>Todo lo que necesitas en una sola app</h2>
            <p className={styles.sectionSubtitle}>
              Diseñada para los venezolanos que manejan múltiples monedas en su día a día.
            </p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map(({ Icon, color, bg, title, description }) => (
              <div key={title} className={styles.featureCard}>
                <div className={styles.featureIconWrap} style={{ background: bg }}>
                  <Icon size={22} color={color} strokeWidth={2} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>{title}</h3>
                  <p className={styles.featureDesc}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Descarga Bolsi hoy, es gratis</h2>
          <p className={styles.ctaSubtitle}>
            Únete a miles de usuarios que ya controlan su economía con Bolsi.
          </p>
          <a href="https://play.google.com" target="_blank" rel="noreferrer" className={styles.storeBtnLight}>
            <FaGooglePlay size={18} />
            Descargar en Google Play
          </a>
        </div>
      </section>
    </div>
  )
}
